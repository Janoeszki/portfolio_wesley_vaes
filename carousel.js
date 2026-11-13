(() => {
    const carousel = document.getElementById('carouselMultiple');
    if (!carousel) return;

    const track = carousel.querySelector('.carousel-inner');
    const items = Array.from(track.querySelectorAll('.carousel-item'));
    const prevBtn = carousel.querySelector('[data-bs-slide="prev"]');
    const nextBtn = carousel.querySelector('[data-bs-slide="next"]');
    const stopAtEnds = carousel.dataset.bsEnds === 'stop';
    let currentIndex = 0;

    function getVisibleCount() {
        const raw = getComputedStyle(carousel).getPropertyValue('--bs-carousel-items');
        const parsed = parseInt(raw, 10);
        return Number.isFinite(parsed) && parsed > 0 ? parsed : 1;
    }

    function updateCarousel() {
        const visible = getVisibleCount();
        const maxIndex = Math.max(0, items.length - visible);
        currentIndex = Math.max(0, Math.min(currentIndex, maxIndex));

        const offset = items[currentIndex].offsetLeft - items[0].offsetLeft;
        track.style.transform = `translateX(-${offset}px)`;

        items.forEach((item, idx) => {
            item.classList.toggle('active', idx === currentIndex);
        });

        if (prevBtn) prevBtn.disabled = stopAtEnds && currentIndex <= 0;
        if (nextBtn) nextBtn.disabled = stopAtEnds && currentIndex >= maxIndex;
    }

    [prevBtn, nextBtn].forEach((btn) => {
        if (!btn) return;
        btn.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopPropagation();
            event.stopImmediatePropagation();

            const dir = btn.dataset.bsSlide === 'prev' ? -1 : 1;
            const maxIndex = Math.max(0, items.length - getVisibleCount());
            const nextIndex = currentIndex + dir;

            if (stopAtEnds) {
                currentIndex = Math.max(0, Math.min(nextIndex, maxIndex));
            } else {
                currentIndex = (nextIndex + maxIndex + 1) % (maxIndex + 1);
            }
            updateCarousel();
        }, true);
    });

    window.addEventListener('resize', updateCarousel);
    updateCarousel();

    const popupModal = document.getElementById('imagePopupModal');
    const popupImg = document.getElementById('imagePopupImg');
    const popupTitle = document.getElementById('imagePopupTitle');
    const popupCloseBtn = popupModal ? popupModal.querySelector('.image-popup-close') : null;
    let lastTriggerCard = null;

    function openImagePopup(card) {
        if (!popupModal || !popupImg || !popupTitle || !card) return;
        const cardImg = card.querySelector('.card-image');
        const titleEl = card.querySelector('.card-title');
        if (!cardImg) return;

        const titleText = titleEl ? titleEl.textContent.trim() : '';
        lastTriggerCard = card;
        popupImg.src = cardImg.src;
        popupImg.alt = cardImg.alt || titleText;
        popupTitle.textContent = titleText;

        popupModal.classList.add('is-open');
        popupModal.setAttribute('aria-hidden', 'false');
        if (popupCloseBtn) popupCloseBtn.focus();
    }

    function closeImagePopup() {
        if (!popupModal || !popupModal.classList.contains('is-open')) return;
        popupModal.classList.remove('is-open');
        popupModal.setAttribute('aria-hidden', 'true');
        if (lastTriggerCard) {
            lastTriggerCard.focus();
            lastTriggerCard = null;
        }
    }

    if (popupModal && popupImg && popupTitle) {
        carousel.querySelectorAll('.card').forEach((card) => {
            card.addEventListener('click', (event) => {
                if (event.target.closest('a, button')) return;
                openImagePopup(card);
            });
            card.addEventListener('keydown', (event) => {
                if (event.target.closest('a, button')) return;
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    openImagePopup(card);
                }
            });
        });

        if (popupCloseBtn) {
            popupCloseBtn.addEventListener('click', closeImagePopup);
        }

        popupModal.addEventListener('click', (event) => {
            if (event.target === popupModal) {
                closeImagePopup();
            }
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && popupModal.classList.contains('is-open')) {
                closeImagePopup();
            }
        });
    }
})();
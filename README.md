# Portfolio Vaes Wesley

> Portfolio for intern-requests for the fulltime day education Full Stack & AI Automation Developer at SyntraPXL.

<a href="https://madewithjev.com/free-tools/ai-slop-detector/report/janoeszki.github.io~f362b0"><img src="https://madewithjev.com/free-tools/ai-slop-detector/badge/janoeszki.github.io~f362b0" alt="38% AI slop, checked by Jev" height="20"></a>

---

## Tech Stack & Tools

* **Frontend:** HTML5, CSS3, JavaScript, Bootstrap 5, Font Awesome
* **AI & Agent Orchestration:** Multi-Agent Orchestration & Harnessing (Plan/Execute workflow with specialized subagents)
* **Project Management & Git:** Git Branching Workflow & GitHub Pages

---

## Important Functionalities

* **CSS & Layout**
  * Flexible viewstate (desktop & smartphone)
    * Large desktop screen: `992px` breakpoint added
  * Creation of `styles.css` file for separation of code & styling
    * Learned that ordering `<link>` tags is important!
  * **Card-format:** Styling in card-format for *'Skills & Tools'* & *'Projecten & Opdrachten'* sections
  * **Accordion-format:** Styling in native `<details>` / `<summary>` accordions for *'Educatie & Traject'* section
  * **Projecten & Opdrachten (Multi-item Carousel & Image Pop-up):**
    * Responsive multi-item carousel (`carousel.js`) showcasing *SyntraPXL bal*, *Witch Hunt*, *Polestar6 Pre-Order Website*, and *Dungeon Delver - Chronicles of Phusza*
    * **Interactive Card & Pop-up Lightbox:** Card thumbnails are hidden inside the cards; hovering or focusing highlights the entire card, and clicking a card opens its project image in a centered pop-up modal (while keeping the project action button independent)

---

## Agent Orchestration & Codebase Optimization

As part of the **AI & Automation** track (*Agent Orchestration & Harnessing*), this codebase is maintained and optimized using a structured multi-agent pipeline:

1. **Plan & Execute Workflow**
   * **Planning Agent:** Performs read-only codebase inspection, identifies structural and styling redundancies, and defines concrete verification criteria before any file is modified.
   * **Execution Agent:** Applies targeted, deterministic refactoring steps and coordinates specialized subagents.

2. **Specialized Subagent Pipeline**
   * **Research Agent (*HTML & CSS Redundancy Auditor*):** Audits `index.html` and `styles.css` for duplicate CSS declaration blocks, dead selectors/variables, repeated inline styles, and semantic HTML issues.
   * **Performance Optimizer Agent (*Frontend & Asset Optimizer*):** Evaluates CSS specificity, resource loading, responsive breakpoints, and image attributes while preserving the dark-theme design without extra build tools.
   * **Browser QA Agent (*Portfolio Visual QA Verifier*):** Verifies the rendered site against a local HTTP server across desktop (`1280x800`) and mobile (`375x812`) viewports—testing navbar dropdowns, card alignment, `<details>` accordions, badge colors, and zero horizontal overflow.

3. **Key Improvements Delivered**
   * **CSS Deduplication (~34% line reduction in `styles.css`):** Consolidated repeated badge rules (`.badge`, `.badge-u`, `.badge-t`, `.badge-e`), merged duplicate navbar and interactive link hover/focus rules, and removed unused Bootstrap accordion variables and dead selectors.
   * **Semantic & Accessible HTML (`index.html`):** Removed repeated inline `style="width: 18rem;"` attributes, fixed container `<div>` and list (`<ul>`/`<li>`) nesting, resolved duplicate IDs, set `<html lang="nl">`, and added descriptive `alt` text to all images.
   * **Interactive Project Carousel & Image Lightbox (`carousel.js`, `styles.css`, `index.html`):** Added keyboard-accessible, hover-highlighted project cards that open each project's preview image in a centered modal overlay on click.

---

### To Do
* 'Projecten & Opdrachten' in carousel (multiple items) format => Flex-start atm

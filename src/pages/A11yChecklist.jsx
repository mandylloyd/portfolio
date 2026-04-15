const sections = [
  {
    id: "semantic",
    label: "Semantic Markup",
    items: [
      <>Use the right HTML tags — headings (<code>h1–h6</code>), lists, tables, forms</>,
      <>Don't use <code>&lt;div&gt;</code> or <code>&lt;span&gt;</code> for structural or interactive elements</>,
      <>The page has exactly one <code>&lt;h1&gt;</code></>,
      "Heading levels are sequential — don't skip from h2 to h4",
      <>Lists use <code>&lt;ul&gt;</code>, <code>&lt;ol&gt;</code>, or <code>&lt;dl&gt;</code> — not just styled divs</>,
      <>Tables have <code>&lt;th&gt;</code> with <code>scope</code> attributes and a <code>&lt;caption&gt;</code> where helpful</>,
      <>Page and document landmarks are used — <code>&lt;main&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>, <code>&lt;aside&gt;</code></>,
    ],
  },
  {
    id: "keyboard",
    label: "Keyboard Navigation",
    items: [
      "All interactive elements are reachable with the Tab key",
      "Focus order makes sense and matches the visual layout",
      <>Focus is always visible — no suppressed <code>outline</code></>,
      "Nothing requires a mouse-only interaction (hover, drag, right-click)",
      "Custom components support expected keyboard patterns (arrow keys in menus, Escape to close modals)",
      "Focus is managed on route changes and modal open/close",
      "No keyboard traps — focus can always move away from a component",
    ],
  },
  {
    id: "aria",
    label: "ARIA",
    items: [
      "Use ARIA only when native HTML can't do the job",
      <>Interactive elements have a meaningful <code>aria-label</code>, <code>role</code>, or <code>alt</code> where needed</>,
      <>Dynamic content updates use <code>aria-live</code> regions appropriately</>,
      <><code>aria-expanded</code>, <code>aria-selected</code>, <code>aria-checked</code> reflect actual state</>,
      <>Don't use <code>aria-hidden</code> on elements that are focusable</>,
      <>Modal dialogs use <code>role="dialog"</code> with <code>aria-modal="true"</code> and a labeled title</>,
      <>Use visually hidden text (not visibility: hidden or display: none) to provide screen reader context that doesn't need to be visible — e.g. for live regions, icon buttons, and status messages</>
    ],
  },
  {
    id: "forms",
    label: "Forms & Errors",
    items: [
      "Every form field has a visible, programmatically associated label",
      "Placeholder text is not used as a substitute for a label",
      "Form errors are announced to screen readers, not just shown visually",
      "Fields with errors are flagged with both color and a text description",
      "Required fields are marked with more than just color",
      <>Autocomplete attributes are set where appropriate (<code>name</code>, <code>email</code>, <code>tel</code>, etc.)</>,
      <>Error messages are associated with their field via <code>aria-describedby</code></>,
      "Don't clear fields on error — preserve user input",
    ],
  },
  {
    id: "media",
    label: "Images & Media",
    items: [
      "Informative images have descriptive alt text",
      <>Decorative images have <code>alt=""</code></>,
      "Videos and audio use an accessible, controllable player",
      "Subtitles and/or alternative tracks are supported",
      "Audio and video don't autoplay without the user's consent",
      "Audio-only or video-only content has a text transcript",
    ],
  },
  {
    id: "color",
    label: "Color & Visual",
    items: [
      "Text meets WCAG AA contrast ratio (4.5:1 for normal text, 3:1 for large text)",
      "UI components and focus indicators meet 3:1 contrast against their background",
      "Placeholder text meets contrast requirements",
      "Information is never conveyed by color alone — always paired with text or an icon",
      "Disabled states still meet minimum contrast or are clearly distinguishable",
      "Content is readable and functional at 200% zoom",
      "Page doesn't break or lose content at 320px wide",
    ],
  },
  {
    id: "motion",
    label: "Motion & Timing",
    items: [
      <>Animations respect <code>prefers-reduced-motion</code></>,
      "No content flashes more than 3 times per second",
      "Timed sessions warn users before expiring and allow extension",
      "Auto-updating content can be paused or stopped",
    ],
  },
  {
    id: "touch",
    label: "Touch & Pointer",
    items: [
      "Touch targets are at least 44×44px",
      <>Actions triggered on pointer down (<code>mousedown</code>, <code>touchstart</code>) can be cancelled or reversed</>,
      "No functionality requires multipoint gestures without a single-pointer alternative",
    ],
  },
  {
    id: "page",
    label: "Page & Document",
    items: [
      "Page title is descriptive and unique per route",
      <><code>&lt;html lang=""&gt;</code> is set correctly</>,
      <>Viewport meta tag does not disable pinch-to-zoom (<code>user-scalable=no</code> is a no)</>,
      "Skip navigation link is present and functional",
      <>CSS <code>order</code> property doesn't create a mismatch between visual and DOM order</>,
    ],
  },
  {
    id: "andi",
    label: "ANDI",
    items: [
      "Run the focusable elements module — every interactive element should have a readable name",
      "Run the structures module — heading order, landmarks, and lists should all pass",
      'Run the links/buttons module — no "click here", "read more", or unlabeled icon buttons',
      "Run the graphics/images module — verify alt text is meaningful or empty for decorative images",
      "Run the color contrast module — flag any failing text/background combinations",
      "Review the ANDI output box for each element — what it announces should make sense out of context",
    ],
  },
  {
    id: "axe",
    label: "Axe",
    items: [
      "Resolve all critical and serious violations before merging",
      'Check "incomplete" results too — these are things axe flagged but couldn\'t fully determine automatically',
      "Violations on interactive elements (buttons, links, inputs) take priority",
      "Don't dismiss a violation without understanding why it's flagged",
      "Re-run axe after any dynamic content loads (modals, toasts, route changes)",
    ],
  },
];

export default function A11yChecklist() {
  function handleClearAll() {
    document
      .querySelectorAll('.a11y-checklist input[type="checkbox"]')
      .forEach((cb) => (cb.checked = false));
  }

  return (
    <div className="app-root a11y-checklist">
      <div className="app-shell">

        <header className="app-header">
          <div className="header-inner">
            <div>
              <p className="header-name">mandylloyd.tech</p>
            </div>
          </div>
        </header>

        <section className="hero">
          <p className="hero-eyebrow">Developer reference</p>
          <h1 className="hero-title">Accessibility Checklist</h1>
          <p className="hero-text">
            A dev-side checklist for common a11y considerations while building.
            Don't forget to add checking this checklist to your checklist!
          </p>
          <p>
            Note that this page does not yet use session storage.</p>
        </section>

        <div className="checklist-controls">
          <button className="filter-button" type="button" onClick={handleClearAll}>
            Clear all
          </button>
        </div>

        <div className="project-grid">
          {sections.map((section) => (
            <div key={section.id} className="project-card">
              <p className="project-role">
                {section.label}
              </p>
              <ul className="checklist-items" aria-label={`${section.label} items`}>
                {section.items.map((item, i) => (
                  <li key={i}>
                    <label className="checklist-label">
                      <input type="checkbox" />
                      <span className="item-text">{item}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

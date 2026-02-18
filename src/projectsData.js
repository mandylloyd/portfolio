export const TAGS = [
  "drupal",
  "javascript",
  "css/scss",
  "accessibility",
  "react",
  "sass"
];

export const projects = [
  {
    id: "nvrf-react-app",
    title: "Bixal – GSA Client: Vote.gov - National Voter Registration Form (NVRF) React Application",

    shortDescription:
      "A React (v18+) multi-step voter registration tool embedded in Vote.gov’s Drupal platform, dynamically rendering state-specific requirements and generating the official federal NVRF PDF client-side.",

    longDescription:
      "Developed a React (v18+) multi-step voter registration application embedded within Vote.gov’s Drupal CMS. The tool supports all U.S. states and territories through state-driven configuration, dynamically rendering only required or optional fields per jurisdiction.\n\nThe form includes custom validation, formatted inputs (dates and phone numbers), conditional rendering, and a progress bar for user guidance. All content is multilingual (20 languages) and CMS-managed.\n\nUpon completion, the app programmatically fills the official federal NVRF PDF template client-side, conditionally removes unnecessary pages, reorders output where required, and generates a downloadable or printable PDF without a server round-trip.",

    impact: [
      "Built a single scalable React application supporting voter registration workflows nationwide.",
      "Implemented state-driven conditional rendering and CMS-managed field requirements.",
      "Programmatically filled and modified the official NVRF PDF client-side, including page removal and reordering.",
      "Integrated multilingual support across 20 languages via Drupal CMS.",
      "Delivered custom validation and inline error handling aligned with WCAG and Section 508 standards."
    ],

    tags: [
      "react",
      "accessibility",
      "javascript",
      "drupal",
      "css/scss",
    ],

    role:
      "Front-End Engineer (React Architecture, Validation, Client-Side PDF Generation)",

    techStack: [
      "React (v18+)",
      "JavaScript",
      "Drupal",
      "PDF-lib",
      "CSS/SCSS",
      "USWDS",
      "Git"
    ],

    links: {
      live: "https://vote.gov/register/virginia/mail-in-form-filler",
      repo: "https://github.com/usagov/vote-gov-nvrf-app",

      codeExamples: [
        {
          text: "State-Driven Conditional Rendering Architecture",
          link: "https://github.com/usagov/vote-gov-nvrf-app/pull/2",
          description:
            "Structured a configuration-driven multi-step form that dynamically renders required and optional fields per state, reducing duplication and enabling scalable jurisdiction support."
        },
        {
          text: "Custom Validation + State Rules (PR #9)",
          link: "https://github.com/usagov/vote-gov-nvrf-app/pull/9",
          description:
            "Implemented HTML5-integrated validation, conditional ID logic per state, date auto-advance behavior, and custom error handling."
        },
        {
          text: "Multi-Step Architecture + State Data Modeling (PR #2)",
          link: "https://github.com/usagov/vote-gov-nvrf-app/pull/2",
          description:
            "Structured step-level validation, lifted state selection logic, and extended state configuration handling."
        },
        {
          text: "Layout Resilience Fix (PR #247)",
          link: "https://github.com/usagov/vote-gov-nvrf-app/pull/247",
          description:
            "Resolved alignment inconsistencies caused by conditional hint spans using consistent flex alignment."
        }
      ]
    },

    images: []
  },
  {
    id: "uswds-design-system",
    title:
      "Bixal – GSA Client: U.S. Web Design System (USWDS) Component Engineering",

    shortDescription:
      "Contributed feature enhancements, accessibility improvements, and forward-compatibility updates to core USWDS components including Modals, In-Page Navigation, Input Mask, and Sass architecture.",

    longDescription:
      "As a Front-End Engineer at Bixal supporting the U.S. Web Design System (USWDS), I contributed enhancements and accessibility improvements across multiple core components used by federal agencies nationwide.\n\nWork included extending modal APIs with programmatic controls, modernizing Sass color utilities for Dart Sass 2.0 compatibility, improving conditional rendering logic for in-page navigation, and leading a large-scale accessibility-focused refactor of the Input Mask component.\n\nAll work required multi-round review collaboration with maintainers, regression testing within Storybook, adherence to non-breaking change policies, WCAG alignment, and unit test updates within the design system’s architecture.",

    impact: [
      "Extended Modal component with non-breaking programmatic APIs (show, hide, toggle) to support automated triggers.",
      "Modernized deprecated Sass color utilities to ensure Dart Sass 2.0 compatibility and prevent future build failures.",
      "Improved In-Page Navigation usability with configurable minimum heading logic to prevent empty rendering.",
      "Led accessibility-focused Input Mask refactor introducing dynamic visual and screen reader error feedback.",
      "Resolved complex edge cases including modifier keys, rapid typing, paste behavior, and navigation key handling.",
      "Collaborated across 100+ review comments to refine architecture and maintain system consistency."
    ],

    tags: [
      "javascript",
      "accessibility",
      "uswds",
      "sass",
      "storybook"
    ],

    role:
      "Front-End Engineer (Component Architecture, Accessibility Engineering, Design System Contributions)",

    techStack: [
      "JavaScript",
      "Sass",
      "Storybook",
      "WCAG / ARIA",
      "Git",
      "Unit Testing",
      "USWDS"
    ],

    links: {
      repo: "https://github.com/uswds/uswds",

      codeExamples: [
        {
          text: "Input Mask Accessibility Refactor (PR #6203)",
          link: "https://github.com/uswds/uswds/pull/6203",
          description:
            "Led a large-scale refactor adding dynamic error messaging, screen reader announcements, paste handling improvements, and expanded unit tests."
        },
        {
          text: "Programmatic Modal API Extension (PR #6299)",
          link: "https://github.com/uswds/uswds/pull/6299",
          description:
            "Introduced non-breaking show(), hide(), and toggle() modal APIs while preserving existing event-driven behavior."
        },
        {
          text: "In-Page Navigation Minimum Heading Logic (PR #6205)",
          link: "https://github.com/uswds/uswds/pull/6205",
          description:
            "Added configurable data-minimum-heading-count attribute to conditionally render navigation only when meaningful."
        },
        {
          text: "Dart Sass 2.0 Compatibility Migration (PR #6270)",
          link: "https://github.com/uswds/uswds/pull/6270",
          description:
            "Replaced deprecated Sass color functions with color.channel() to eliminate compiler warnings and ensure forward compatibility."
        },
      ]
    },

    images: []
  },
  {
    id: "vote-gov-drupal",
    title: "Bixal – GSA Client: Vote.gov",

    shortDescription:
      "Front-end development and accessibility contributions for Vote.gov’s modern Drupal platform, supporting multilingual voter registration guidance and federal WCAG compliance.",

    longDescription:
      "As a Software Engineer at Bixal supporting the U.S. General Services Administration (GSA), I contributed to the modernization and enhancement of Vote.gov’s Drupal platform. The site delivers multilingual voter registration guidance to users across the United States.\n\nWorking within an Agile, cross-functional team, I collaborated with designers, accessibility specialists, backend engineers, and content strategists to implement UI enhancements, extend Drupal theme components, improve accessibility compliance, and integrate React-based functionality within a CMS-driven architecture.\n\nI also supported improvements related to the National Voter Registration Form (NVRF) experience, ensuring embedded tools and related workflows aligned with federal accessibility and usability standards.",

    impact: [
      "Contributed to WCAG 2.1 AA compliance improvements across navigation, semantic structure, and ARIA implementation.",
      "Extended reusable Drupal theme components to support flexible page layouts and evolving content needs.",
      "Implemented USWDS-aligned styling and RTL support for multilingual accessibility.",
      "Collaborated on React integration within Drupal blocks to support dynamic user interactions.",
      "Delivered iterative UI enhancements through sprint-based Agile development cycles."
    ],

    tags: [
      "drupal",
      "javascript",
      "css/scss",
      "accessibility",
    ],

    role:
      "Front-End Web Developer (Drupal Theming, Accessibility, React Integration)",

    techStack: [
      "Drupal",
      "JavaScript",
      "React",
      "CSS",
      "SCSS/SASS",
      "USWDS",
      "Twig",
      "Git"
    ],

    links: {
      live: "https://vote.gov",
      legacyRepo: "https://github.com/usagov/vote-gov",
      repo: "https://github.com/usagov/vote-gov-drupal",

      codeExamples: [
        // TOP 4
        {
          text: "SCSS Architecture + High Contrast Support",
          link: "https://github.com/usagov/vote-gov-drupal/pull/783/changes",
          description:
            "Enhanced theme-level SCSS structure using nesting and CSS custom properties to support high-contrast accessibility modes."
        },
        {
          text: "Component Architecture – Hero Variants",
          link: "https://github.com/usagov/vote-gov-drupal/pull/937/changes",
          description:
            "Extended the reusable Hero component to support multiple layout and content variants across page types while maintaining accessibility and design system consistency."
        },
        {
          text: "React Embedded in Drupal",
          link: "https://github.com/usagov/vote-gov-drupal/pull/913",
          description:
            "Embedded a React application within a custom Drupal block, demonstrating CMS-to-SPA integration within a federal platform."
        },
        {
          text: "Frontend Documentation",
          link: "https://github.com/usagov/vote-gov-drupal/blob/ad25b33c903763a0201837f8ac10471a69a3a4db/docs/frontend.md",
          description:
            "Expanded frontend documentation clarifying component usage, Twig templates, and SCSS structure."
        },

        // Remaining examples

        {
          text: "Drupal Views + WCAG 2.4.5 (Multiple Ways)",
          link: "https://github.com/usagov/vote-gov-drupal/pull/219/changes",
          description:
            "Built a dynamic sitemap using Drupal Views and embedded navigation structures to improve information architecture and accessibility."
        },
        {
          text: "Search/Filter Enhancement – Registration Tool",
          link: "https://github.com/usagov/vote-gov-drupal/pull/641/changes",
          description:
            "Improved filtering logic to allow matching by state abbreviation and partial word input."
        },
        {
          text: "Accessibility Remediation (ARIA + Semantic Structure)",
          link: "https://github.com/usagov/vote-gov-drupal/pull/729",
          description:
            "Improved WCAG compliance by refining alt text, correcting ARIA attributes, and restructuring semantic landmarks to eliminate redundant screen reader region announcements."
        },
        {
          text: "Responsive Layout Bug Fix (USWDS Grid)",
          link: "https://github.com/usagov/vote-gov-drupal/pull/644",
          description:
            "Resolved layout constraints within the USWDS grid system to ensure proper spacing for language selector controls."
        },
        {
          text: "USWDS Overrides + RTL Support",
          link: "https://github.com/usagov/vote-gov-drupal/blob/4c1abff8584c059412c3947654b9102b785538b3/web/themes/custom/votegov/src/sass/uswds-overrides/usa-breadcrumb.scss",
          description:
            "Implemented USWDS SCSS overrides including right-to-left (RTL) styling adjustments to support multilingual layouts."
        },
        {
          text: "Drupal Configuration – Admin Permissions",
          link: "https://github.com/usagov/vote-gov-drupal/pull/26/changes",
          description:
            "Updated Drupal administrative permissions to support secure content workflows."
        },
      ]
    },
    images: []
  }
];

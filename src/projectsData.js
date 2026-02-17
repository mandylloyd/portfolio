export const TAGS = [
  "drupal",
  "javascript",
  "css/sass",
  "accessibility",
  "uswds",
  "react",
  "agile"];

export const projects = [
  {
    id: "vote-gov-drupal",
    title: "Bixal – GSA Client: Vote.gov",

    shortDescription:
      "Front-end development and accessibility contributions for Vote.gov’s modern Drupal platform, supporting multilingual voter registration guidance and federal WCAG compliance.",

    longDescription:
      "As a Front-End Web Developer at Bixal supporting the U.S. General Services Administration (GSA), I contributed to the modernization and enhancement of Vote.gov’s Drupal platform. The site delivers multilingual voter registration guidance to users across the United States.\n\nWorking within an Agile, cross-functional team, I collaborated with designers, accessibility specialists, backend engineers, and content strategists to implement UI enhancements, extend Drupal theme components, improve accessibility compliance, and integrate React-based functionality within a CMS-driven architecture.\n\nI also supported improvements related to the National Voter Registration Form (NVRF) experience, ensuring embedded tools and related workflows aligned with federal accessibility and usability standards.",

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
      "css/sass",
      "accessibility",
      "uswds",
      "agile"
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
        // TOP 4 — These show in modal

        {
          text: "Accessibility Remediation (ARIA + Semantic Structure)",
          link: "https://github.com/usagov/vote-gov-drupal/pull/729",
          description:
            "Improved WCAG compliance by refining alt text, correcting ARIA attributes, and restructuring semantic landmarks to eliminate redundant screen reader region announcements."
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
          text: "USWDS Overrides + RTL Support",
          link: "https://github.com/usagov/vote-gov-drupal/blob/4c1abff8584c059412c3947654b9102b785538b3/web/themes/custom/votegov/src/sass/uswds-overrides/usa-breadcrumb.scss",
          description:
            "Implemented USWDS SCSS overrides including right-to-left (RTL) styling adjustments to support multilingual layouts."
        },

        // Remaining examples (only on full page)

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
          text: "Responsive Layout Bug Fix (USWDS Grid)",
          link: "https://github.com/usagov/vote-gov-drupal/pull/644",
          description:
            "Resolved layout constraints within the USWDS grid system to ensure proper spacing for language selector controls."
        },
        {
          text: "SCSS Architecture + High Contrast Support",
          link: "https://github.com/usagov/vote-gov-drupal/pull/783/changes",
          description:
            "Enhanced theme-level SCSS structure using nesting and CSS custom properties to support high-contrast accessibility modes."
        },
        {
          text: "Drupal Configuration – Admin Permissions",
          link: "https://github.com/usagov/vote-gov-drupal/pull/26/changes",
          description:
            "Updated Drupal administrative permissions to support secure content workflows."
        },
        {
          text: "Frontend Documentation",
          link: "https://github.com/usagov/vote-gov-drupal/blob/ad25b33c903763a0201837f8ac10471a69a3a4db/docs/frontend.md",
          description:
            "Expanded frontend documentation clarifying component usage, Twig templates, and SCSS structure."
        }
      ]
    },

    images: []
  }
];

// export const projects = [
//   {
//     id: "vote-gov-drupal",
//     title: "Bixal GSA client: Vote.gov",
//     shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     longDescription:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque luctus ligula sed libero varius, eget hendrerit metus bibendum. Suspendisse potenti. Aenean ac ligula id lacus facilisis aliquet vel et libero. Donec ut fermentum libero, a accumsan sapien. Sed volutpat justo non augue aliquet, id placerat mi tempor.",
//     tags: ["drupal", "javascript", "css", "sass", "accessibility", "agile"],
//     role: "Lorem Ipsum Role",
//     techStack: ["Drupal", "JavaScript", "CSS", "SASS"],
//     links: {
//       live: "www.vote.gov",
//       legacyRepo: "https://github.com/usagov/vote-gov",
//       repo: "https://github.com/example/react-ui",
//       codeExamples: [
//       {
//         text: "Code example: JavaScript, Drupal Config",
//         link: "https://github.com/usagov/vote-gov-drupal/pull/182/changes/b8e5af07e31890d5753a669841431794b49ce469",
//         description: "Attached JavaScript tool functionality in Drupal."}
//       ,
//       {
//         text: "Code example: Drupal Config & Theming, Accessibility",
//         link: "https://github.com/usagov/vote-gov-drupal/pull/219/changes",
//         description: "Built a dynamic sitemap in Drupal using Views and embedded primary navigation menus to improve information architecture, enhance accessibility (WCAG 2.4.5 – Multiple Ways), and support crawlability."
//       },
//       {
//         text: "Code example: Accessibility",
//         link: "https://github.com/usagov/vote-gov-drupal/pull/729",
//         description: "Enhanced WCAG compliance by refining alt text, correcting ARIA labels, and restructuring semantic landmarks to eliminate redundant navigation and region announcements for screen reader users."
//       },
//       {
//         text: "Code example: Accessibility, CSS/SASS",
//         link: "https://github.com/usagov/vote-gov-drupal/pull/783/changes",
//         description: "Implemented theme-based styling using SCSS nesting and CSS custom properties to support high-contrast accessibility modes."
//       },
//       {
//         text: "Code example: Drupal Theming",
//         link: "https://github.com/usagov/vote-gov-drupal/pull/937/changes",
//         description: "Extended the existing Hero component to support multiple variants for different page types, allowing flexible headings, body text, links, and media while maintaining accessibility and alignment with design standards"
//       },
//       {
//         text: "Code example: Drupal, React",
//         link: "https://github.com/usagov/vote-gov-drupal/pull/913",
//         description: "Embedded a React app in a custom Drupal block, highlighting CMS customization and front-end integration skills."
//       },
//             {
//         text: "Code example: Drupal Congif",
//         link: "https://github.com/usagov/vote-gov-drupal/pull/26/changes",
//         description: "Updating admin perfmissions"
//       },
//       {
//         text: "Code example: USWDS, CSS/SCSS",
//         link: "https://github.com/usagov/vote-gov-drupal/blob/4c1abff8584c059412c3947654b9102b785538b3/web/themes/custom/votegov/src/sass/uswds-overrides/usa-breadcrumb.scss",
//         description: "Implementing RTL style overrides"
//       },
//       {
//         text: "Code example: Bug Fix, USWDS, CSS/SCSS",
//         link: "https://github.com/usagov/vote-gov-drupal/pull/644",
//         description: "Add grid column restrictions to give language selector button room on wider widths"
//       },
//       {
//         text: "Code example: Bug Fix, Drupal Theming",
//         link: "https://github.com/usagov/vote-gov-drupal/pull/641/changes",
//         description: "Improves registration tool filter functionality so that input can match the state abbreviation or the first letters of words."
//       },
//       {
//         text: "Agile, CSS/SCSS",
//         link: "https://github.com/usagov/vote-gov-drupal/pull/725",
//         description: "Shows agile abilities with design updates in css"
//       },
//       {
//         text: "Documentation / PR Details",
//         link: "https://github.com/usagov/vote-gov-drupal/pull/729",
//         description: "Produced well-documented pull requests outlining accessibility rationale, implementation details, and structured QA validation steps."
//       },
//             {
//         text: "Documentation / PR Details",
//         link: "https://github.com/usagov/vote-gov-drupal/pull/830",
//         description: "Well-documented PR with clear rationale, testing steps, and before/after visuals for accessibility and UI enhancements."
//       },
//             {
//         text: "Documentation",
//         link: "https://github.com/usagov/vote-gov-drupal/blob/ad25b33c903763a0201837f8ac10471a69a3a4db/docs/frontend.md",
//         description: "Updated and expanded frontend documentation for the Vote.gov Drupal theme, clarifying component usage, templates, and coding standards for developers."
//       }
//     ],
//     },
//     images: [],
//   }
// ]

//   {
//     id: "proj-hugo-site",
//     text: "Hugo Static Website",
//     shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     longDescription:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Phasellus eu condimentum ipsum. Mauris vulputate congue molestie. Pellentesque sed pellentesque tellus. Proin a felis neque. Sed eget ligula ut magna aliquam ultrices.",
//     tags: ["hugo", "sass"],
//     role: "Lorem Ipsum Role",
//     techStack: ["Hugo", "Sass"],
//     links: {
//       live: "https://example.com/hugo-site",
//       repo: "https://github.com/example/hugo-site",
//     },
//     images: [],
//   },

//   {
//     id: "proj-layouts",
//     text: "CSS Layout Playground",
//     shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     longDescription:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non urna fermentum, gravida ipsum eget, molestie augue. Sed ultrices, arcu id cursus condimentum, sem nibh convallis sapien, non fermentum ante nunc vel nisi.",
//     tags: ["css", "sass"],
//     role: "Lorem Ipsum Role",
//     techStack: ["CSS Grid", "Flexbox", "Sass"],
//     links: {
//       live: "https://example.com/layouts",
//       repo: "https://github.com/example/layouts",
//     },
//     images: [],
//   },

//   {
//     id: "proj-component-library",
//     text: "Component Library",
//     shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     longDescription:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam gravida fermentum mauris, eu venenatis justo dapibus non. Pellentesque non orci non arcu ullamcorper ultricies. Maecenas aliquet lorem sit amet urna finibus luctus.",
//     tags: ["react", "javascript"],
//     role: "Lorem Ipsum Role",
//     techStack: ["React", "JavaScript"],
//     links: {
//       live: "https://example.com/component-library",
//       repo: "https://github.com/example/component-library",
//     },
//     images: [],
//   },

//   {
//     id: "blog-accessibility-article",
//     text: "Blog Post — Accessibility & UI Design",
//     shortDescription:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel felis sit amet nisl vehicula fermentum.",
//     longDescription:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ullamcorper magna sit amet eros vestibulum, a sagittis velit imperdiet. Pellentesque sit amet sem ac nunc tincidunt egestas. Etiam purus tortor, facilisis vel mollis ac, pharetra eget ante. Vestibulum suscipit gravida mi.",
//     tags: ["blog"],
//     role: "Blog Post",
//     techStack: [],
//     links: {
//       live: "https://example.com/my-blog-post",
//       repo: null,
//     },
//     images: [
//       {
//         src: "/images/blog-placeholder.png",
//         alt: "Screenshot preview of the blog post page.",
//       },
//     ],
//   },
// ];

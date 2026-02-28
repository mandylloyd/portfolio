import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ProjectCard from './ProjectCard';

describe('ProjectCard', () => {
  const user = userEvent.setup()
  const handleClick = vi.fn();
  const project = {
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
  }

  beforeEach(() => {
    handleClick.mockReset()
  })

  it('calls onClick when using keyboard navigation', async () => { 
    render(<ProjectCard project={project} onClick={handleClick} />)
    screen.getByRole('button', { name: `View details for ${project.title}` }).focus()

    await user.keyboard(' ');
    expect(handleClick).toHaveBeenCalledTimes(1);

    await user.keyboard('{Enter}');
    expect(handleClick).toHaveBeenCalledTimes(2);
  })
  it('calls onClick when clicked', async () => { 
    render(<ProjectCard project={project} onClick={handleClick} />)

    await user.click(screen.getByRole('button', { name: `View details for ${project.title}` }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  })
  it('has an accessible label', () => { 
    render(<ProjectCard project={project} onClick={handleClick} />)

    expect(screen.getByRole('button', { name: `View details for ${project.title}` })).toBeInTheDocument();})
})
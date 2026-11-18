export interface WorkshopTopic {
  title: string;
  description: string;
  images: { src: string; alt: string; caption?: string }[];
}

// Add images from public/workshops using /workshops/filename in src.
export const workshopTopics: WorkshopTopic[] = [
  {
    title: "Branching and Merging",
    description: "Master one of Onshape's most powerful capabilities for design exploration and team collaboration.",
    images: [],
  },
  {
    title: "Levels of Rigor",
    description: 'Sometimes your models should "suck" and sometimes they need to be squeaky clean. Understand and get on the same page about what kind of CAD to build based on your current project phase, and the jobs the CAD model has to do.',
    images: [],
  },
  {
    title: "FeatureScript Fundamentals for Vibe Coders",
    description: "Understand some of the nuances of FeatureScript that will make you a more efficient feature architect, prompter, and reviewer.",
    images: [],
  },
  {
    title: "Surface Texturing Techniques for Designers",
    description: "Subtle CMF decisions, like surface textures can elevate a design, adding tactility, and a sense of quality and attention to detail. Onshape supports many advanced workflows for creating these patterns and textures, but you've got to know where to look.",
    images: [],
  },
  {
    title: "Project Planning Session",
    description: "Before embarking on a multi-month modeling journey, it's important to get clear on the strategy (especially as part of a team!). In this session we work to plan the flow of parametric data through a project, so you and your team can stay coordinated, divvy the work, and not get bogged down in the model as it inevitably accrues complexity. No battle was won according to plan, but no battle was won without one.",
    images: [],
  },
];

export interface WorkshopTopic {
  title: string;
  description: string;
  gallery?: "strip";
  video?: { src: string; poster: string; label: string };
  images: { src: string; alt: string; caption?: string }[];
}

// Add images from public/workshops using /workshops/filename in src.
export const workshopTopics: WorkshopTopic[] = [
  {
    title: "Branching and Merging",
    description: "Master one of Onshape's most powerful capabilities for design exploration and team collaboration.",
    video: { src: "/workshops/web/branching-merging.mp4", poster: "/workshops/web/branching-merging.webp", label: "Onshape branching and merging workflow demonstration" },
    images: [],
  },
  {
    title: "Levels of Rigor",
    description: 'Sometimes your models should "suck" and sometimes they need to be squeaky clean. Understand and get on the same page about what kind of CAD to build based on your current project phase, and the jobs the CAD model has to do.',
    images: [{
      src: "/workshops/project-stages.svg",
      alt: "Project stages: explore problems by asking What if? and What matters? Explore solutions by asking How might we? and Should we? Establish a design vision, then execute through EVT, DVT, PVT, and Production as risk, commitment, and clarity increase. Modeling emphasis shifts from speed to rigor.",
    }],
  },
  {
    title: "FeatureScript Fundamentals for Vibe Coders",
    description: "Understand some of the nuances of FeatureScript that will make you a more efficient feature architect, prompter, and reviewer.",
    images: [
      { src: "/workshops/web/featurescript-code.webp", alt: "FeatureScript code defining the inputs and behavior of an optics feature in Onshape." },
      { src: "/workshops/web/featurescript-example.webp", alt: "The optics feature in use, tracing light rays through a curved light pipe." },
    ],
  },
  {
    title: "Surface Texturing Techniques for Designers",
    description: "Subtle CMF decisions, like surface textures can elevate a design, adding tactility, and a sense of quality and attention to detail. Onshape supports many advanced workflows for creating these patterns and textures, but you've got to know where to look.",
    gallery: "strip",
    images: [
      { src: "/workshops/web/mx-master.webp", alt: "Rippled surface texture on a rounded product panel." },
      { src: "/workshops/web/feature-pattern.webp", alt: "Faceted texture fading into a smooth surface." },
      { src: "/workshops/web/tween-fill.webp", alt: "Repeated ribs following a curved strip." },
      { src: "/workshops/web/hex-attractor.webp", alt: "Hexagonal pattern changing around a curved attractor reference." },
      { src: "/workshops/web/joystick.webp", alt: "Circular pattern forming fluted details around a joystick shaft." },
      { src: "/workshops/web/speaker.webp", alt: "Speaker grille with a fading pattern of circular perforations." },
    ],
  },
  {
    title: "Project Planning Session",
    description: "Before embarking on a multi-month modeling journey, it's important to get clear on the strategy (especially as part of a team!). In this session we work to plan the flow of parametric data through a project, so you and your team can stay coordinated, divvy the work, and not get bogged down in the model as it inevitably accrues complexity. No battle was won according to plan, but no battle was won without one.",
    images: [{
      src: "/workshops/web/project-planning.webp",
      alt: "Project data-flow diagram showing master variables and scaffolds feeding separate reel and pole documents, whose parts flow into the main assembly document.",
    }],
  },
];

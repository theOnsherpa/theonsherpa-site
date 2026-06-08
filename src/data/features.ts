export type FeatureLink = {
  slug: string;
  name: string;
  href: string;
  summary: string;
  category: "Modeling" | "Automation" | "Utilities" | "Geometry";
  media?: string;
  status?: "needs-gif" | "ready";
  highlight?: boolean;
};

export const featureLinks: FeatureLink[] = [
  { slug: "3d-printed-hole", name: "3D Printed Hole", href: "https://cad.onshape.com/documents/2eec193bbe052d8eaf2c4cd7/w/b58fde70f3a6df7a3290928f/e/39e46afef3cf385aac8b60ce", summary: "Hole tools tuned for 3D printed hardware and practical fabrication workflows.", category: "Modeling", status: "needs-gif", highlight: true },
  { slug: "attractor-pattern", name: "Attractor Pattern", href: "https://cad.onshape.com/documents/ca03eaf542826bb98f6cc90e/w/dda165f92e2ad786bd53d97a/e/9b97d9037f0e0bb481cf6111", summary: "Generate patterned geometry driven by attractor relationships.", category: "Geometry", status: "needs-gif", highlight: true },
  { slug: "freeform-spline", name: "Freeform Spline", href: "https://cad.onshape.com/documents/cd51f29c6937305f86a9df95/v/ad52f46ed999aedd596222e1/e/44de484ba0acba52f99fcfc5", summary: "Create more expressive spline geometry inside Onshape.", category: "Geometry", status: "needs-gif", highlight: true },
  { slug: "captive-nut", name: "Captive Nut", href: "https://cad.onshape.com/documents/d40f3bfc679b364ebb9f35df/v/0ae6acaf4988390cd3387c77/e/c9a1f942a2dbf375090ff799", summary: "Add captive nut features without rebuilding the same cutouts by hand.", category: "Modeling", status: "needs-gif", highlight: true },
  { slug: "grid-extrude", name: "Grid Extrude", href: "https://cad.onshape.com/documents/d1489499c6bfdc52ce5cf32a/w/c544b659a37041d14e810028/e/f035485fa75fde4821cf2aa1", summary: "Extrude patterned grid regions quickly from selected geometry.", category: "Modeling", status: "needs-gif", highlight: true },
  { slug: "3d-points", name: "3D Points", href: "https://cad.onshape.com/documents/309e817bcaf616677a834985/w/ee7fdbb710c9b2bce5097f35/e/76d8abc457676e82f84a3ece", summary: "Work with spatial point references more directly in custom workflows.", category: "Utilities", status: "needs-gif", highlight: true },
  { slug: "linear-pattern-plus", name: "Linear Pattern Plus", href: "https://cad.onshape.com/documents/1196579d97167d7a348652a9/w/90798a0a9e5fb98821d253c4/e/3e9783cad47053c2abb99ce0", summary: "Extend the standard linear pattern idea with more flexible behavior.", category: "Automation", status: "needs-gif", highlight: true },
  { slug: "mesh-copy-and-split", name: "Mesh Copy and Split", href: "https://cad.onshape.com/documents/53ca0ca4ee0dce4a4c544698/w/1cded8bc47e636460ba13f02/e/9590e635b48fa7fe75a966a2", summary: "Copy and split mesh-like geometry for faster downstream operations.", category: "Geometry", status: "needs-gif", highlight: true },
  { slug: "multi-mirror", name: "Multi-mirror", href: "https://cad.onshape.com/documents/28ce556560feca48059476f9/w/539496f043b926e69bb1337b/e/56708624b09fbbd5f0398d78", summary: "Mirror geometry across multiple references in a single feature.", category: "Automation", status: "needs-gif", highlight: true },
  { slug: "optics", name: "Optics", href: "https://cad.onshape.com/documents/de8cbd559bd2dcc347c38ff3/w/3603b1286161ccca20f2e841/e/b1db47e3a33d6461f8e732c1", summary: "Tools for optical layout and geometry exploration.", category: "Geometry", status: "needs-gif", highlight: true },
  { slug: "part-name", name: "Part Name", href: "https://cad.onshape.com/documents/f4d470584fdeef9603415532/w/56e512cc2e9e79520f49fe0f/e/acddbbed81af3772a07adf21", summary: "Bring part names into geometry-driven workflows.", category: "Utilities", status: "needs-gif", highlight: true },
  { slug: "profile-sweeper", name: "Profile Sweeper", href: "https://cad.onshape.com/documents/975b17bec7bc91e361d9b9c8/w/91905a6ecc052ba2276aeb62/e/aa90c4402d7484f605a7d4ef", summary: "Sweep profile geometry through reusable custom feature controls.", category: "Modeling", status: "needs-gif", highlight: true },
  { slug: "selection-fillet", name: "Selection Fillet", href: "https://cad.onshape.com/documents/03d360e7ad4f6762d65fac6f/w/ea253be969c16f80b27583db/e/7aa592d4ddb8c61a41a92b43", summary: "Apply fillets from richer selection logic.", category: "Modeling", status: "needs-gif", highlight: true },
  { slug: "speaker-pattern", name: "Speaker Pattern", href: "https://cad.onshape.com/documents/7357473bee84cfbece0caa72/w/6b1397ebf6249eadf5cb37c5/e/193a8b3dc86dd59ba9c83492", summary: "Generate speaker-style perforation patterns with custom controls.", category: "Geometry", status: "needs-gif", highlight: true },
  { slug: "spline-on-mesh", name: "Spline on Mesh", href: "https://cad.onshape.com/documents/53ca0ca4ee0dce4a4c544698/w/1cded8bc47e636460ba13f02/e/9590e635b48fa7fe75a966a2", summary: "Create spline references on mesh-like geometry.", category: "Geometry", status: "needs-gif", highlight: true },
  { slug: "drape-surface", name: "Drape Surface", href: "https://cad.onshape.com/documents/4cbe0127e5dfd2e5b9d6c70e/w/ac9093e2337214ab30f41bdb/e/a93a16bb9c575e8aae747921", summary: "Drape surface geometry across target forms.", category: "Geometry", status: "needs-gif" },
  { slug: "face-curves", name: "Face Curves", href: "https://cad.onshape.com/documents/a8fffe63f92001db50a75db9/w/fc53073eed228b5f099ca3f6/e/193257f65ba4c932585edbb6", summary: "Extract and work with curve data from selected faces.", category: "Geometry", status: "needs-gif" },
  { slug: "pan-pipe", name: "Pan Pipe", href: "https://cad.onshape.com/documents/4c7e52e0fc4211bda7312685/w/f7524784b433ac62877f1808/e/a22bf5326f714c9701c92105", summary: "Generate pan pipe geometry from controlled inputs.", category: "Modeling", status: "needs-gif" },
  { slug: "composite-everything", name: "Composite Everything", href: "https://cad.onshape.com/documents/addacd582bdb5a20a10a6573/w/3dd25e58c333ff992c326a77/e/8b998a52bd7d2c7aa123bd38", summary: "Bundle broad selections into composite parts quickly.", category: "Utilities", status: "needs-gif" },
  { slug: "regen-timer", name: "Regen Timer", href: "https://cad.onshape.com/documents/dd0649f04629949a0693be4b/w/583b82997ea9a69501f1f45a/e/2db7b645b953df6c652160c2", summary: "Measure regeneration timing while tuning model performance.", category: "Utilities", status: "needs-gif" },
];

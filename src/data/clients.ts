export type ClientLogo = {
  name: string;
  logo?: string;
  href?: string;
  scale?: number;
};

export const clientLogos: ClientLogo[] = [
  { name: "Amazon", logo: "/clients/Amazon.svg", scale: 1.04 },
  { name: "Custom Truck One", logo: "/clients/Custom Truck One.svg", scale: 0.98 },
  { name: "DeRoyal", logo: "/clients/DeRoyal.svg", scale: 1.08 },
  { name: "Fivestars", logo: "/clients/Fivestars.svg", scale: 1.04 },
  { name: "Google", logo: "/clients/Google.svg", scale: 0.96 },
  { name: "Griffin", logo: "/clients/Griffin.svg", scale: 1.08 },
  { name: "LP", logo: "/clients/LP.svg", scale: 1.1 },
  { name: "Smile Direct Club", logo: "/clients/Smile Direct Club.svg", scale: 1.02 },
  { name: "Sonos", logo: "/clients/Sonos.svg", scale: 0.92 },
  { name: "Tesla", logo: "/clients/Tesla.svg", scale: 1.1 },
  { name: "Vanderbilt University", logo: "/clients/Vanderbilt University.svg", scale: 1 },
];

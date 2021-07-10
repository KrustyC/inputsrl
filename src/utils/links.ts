export enum Page {
  HOME = "home",
  OBBIETTIVI = "obiettivi",
  SERVIZI = "servizi",
  TALENTI = "talenti",
  ESEMPI = "esempi",
  BLOG = "blog",
  CONTATTI = "contatti",
  LOW_IMPACT = "low_impact",
}

export interface Link {
  id: Page;
  label: string;
}
export const links: Link[] = [
  { id: Page.HOME, label: "Home" },
  { id: Page.OBBIETTIVI, label: "Obiettivi" },
  { id: Page.SERVIZI, label: "Servizi" },
  { id: Page.TALENTI, label: "Talenti" },
  { id: Page.ESEMPI, label: "Esempi" },
  { id: Page.BLOG, label: "Blog" },
  { id: Page.CONTATTI, label: "Contatti" },
];

export enum Page {
  OBBIETTIVI = "obbiettivi",
  SERVIZI = "servizi",
  TALENTI = "talenti",
  ESEMPI = "esempi",
  BLOG = "blog",
  CONTATTI = "contatti",
}

export interface Link {
  id: Page;
  label: string;
}
export const links: Link[] = [
  { id: Page.OBBIETTIVI, label: "Obbiettivi" },
  { id: Page.SERVIZI, label: "Servizi" },
  { id: Page.TALENTI, label: "Talenti" },
  { id: Page.ESEMPI, label: "Esempi" },
  { id: Page.BLOG, label: "Blog" },
  { id: Page.CONTATTI, label: "Contatti" },
];

export interface Talento {
  nome: string;
  ruolo: string;
  foto: string;
  email: string;
  specializzazioni: string[];
}
export const talenti: Talento[] = [
  {
    nome: "Marco",
    foto: "https://picsum.photos/200/300",
    ruolo: "Founder",
    email: "Email",
    specializzazioni: ["Processing", "Sci-fi", "Sound Engineering"],
  },
  {
    nome: "Alessio",
    foto: "https://picsum.photos/200/300",
    ruolo: "Programmatore",
    email: "Email",
    specializzazioni: ["Processing", "Sci-fi", "Sound Engineering"],
  },
  {
    nome: "Sara",
    foto: "https://picsum.photos/200/300",
    ruolo: "Accountant",
    email: "Email",
    specializzazioni: ["Processing", "Sci-fi", "Sound Engineering"],
  },
  {
    nome: "Jemma",
    foto: "https://picsum.photos/200/300",
    ruolo: "Programmatrice",
    email: "Email",
    specializzazioni: ["Processing", "Sci-fi", "Sound Engineering"],
  },
];

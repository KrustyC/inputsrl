export interface Talento {
  nome: string;
  ruolo: string;
  fotoLight: string;
  fotoDark: string;
  email: string;
  specializzazioni: string[];
}
export const talenti: Talento[] = [
  {
    nome: 'Marco',
    fotoLight: 'images/talenti/talenti-1-light.svg',
    fotoDark: 'images/talenti/talenti-1-dark.svg',
    ruolo: 'Founder',
    email: 'Email',
    specializzazioni: ['Processing', 'Sci-fi', 'Sound Engineering'],
  },
  {
    nome: 'Alessio',
    fotoLight: 'images/talenti/talenti-2-light.svg',
    fotoDark: 'images/talenti/talenti-2-dark.svg',
    ruolo: 'Programmatore',
    email: 'Email',
    specializzazioni: ['Processing', 'Sci-fi', 'Sound Engineering'],
  },
  {
    nome: 'Sara',
    fotoLight: 'images/talenti/talenti-3-light.svg',
    fotoDark: 'images/talenti/talenti-3-dark.svg',
    ruolo: 'Accountant',
    email: 'Email',
    specializzazioni: ['Processing', 'Sci-fi', 'Sound Engineering'],
  },
  {
    nome: 'Jemma',
    fotoLight: 'images/talenti/talenti-4-light.svg',
    fotoDark: 'images/talenti/talenti-4-dark.svg',
    ruolo: 'Programmatrice',
    email: 'Email',
    specializzazioni: ['Processing', 'Sci-fi', 'Sound Engineering'],
  },
];

export interface Post {
  titolo: string;
  immagineLight: string;
  immagineDark: string;
  data: string;
  link: string;
  pubblicato: boolean;
}
export const posts: Post[] = [
  {
    titolo: "Le parole dell'immaginazione",
    immagineLight: 'images/blog/blog-1-light.svg',
    immagineDark: 'images/blog/blog-1-dark.svg',
    pubblicato: false,
    link: 'https://medium.com',
    data: 'COMING SOON',
  },
  {
    titolo: 'iZoom: da piattaforma digitale a retail locale',
    immagineLight: 'images/blog/blog-2-light.svg',
    immagineDark: 'images/blog/blog-2-dark.svg',
    pubblicato: true,
    link: 'https://medium.com',
    data: '23 Giugno 2021',
  },
  {
    titolo: "Le parole dell'immagine",
    immagineLight: 'images/blog/blog-3-light.svg',
    immagineDark: 'images/blog/blog-3-dark.svg',
    pubblicato: true,
    link: 'https://medium.com',
    data: '23 Giugno 2021',
  },
  {
    titolo: 'Reggio X Milano',
    immagineLight: 'images/blog/blog-4-light.svg',
    immagineDark: 'images/blog/blog-4-dark.svg',
    pubblicato: true,
    link: 'https://medium.com',
    data: '23 Giugno 2021',
  },
  {
    titolo: 'Un altro progetto',
    immagineLight: 'images/blog/blog-5-light.svg',
    immagineDark: 'images/blog/blog-5-dark.svg',
    pubblicato: true,
    link: 'https://medium.com',
    data: '23 Giugno 2021',
  },
  {
    titolo: 'Un altro progetto ancora',
    immagineLight: 'images/blog/blog-6-light.svg',
    immagineDark: 'images/blog/blog-6-dark.svg',
    pubblicato: true,
    link: 'https://medium.com',
    data: '23 Giugno 2021',
  },
];

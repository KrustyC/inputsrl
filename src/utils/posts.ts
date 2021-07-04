export interface Post {
  titolo: string;
  immagine: string;
  data: string;
  link: string;
  pubblicato: boolean;
}
export const posts: Post[] = [
  {
    titolo: "Le parole dell'immaginazione",
    immagine: 'https://picsum.photos/200/300',
    pubblicato: false,
    link: 'https://medium.com',
    data: 'COMING SOON',
  },
  {
    titolo: 'iZoom: da piattaforma digitale a retail locale',
    immagine: 'https://picsum.photos/200/300',
    pubblicato: true,
    link: 'https://medium.com',
    data: '23 Giugno 2021',
  },
  {
    titolo: "Le parole dell'immagine",
    immagine: 'https://picsum.photos/200/300',
    pubblicato: true,
    link: 'https://medium.com',
    data: '23 Giugno 2021',
  },
  {
    titolo: 'Reggio X Milano',
    immagine: 'https://picsum.photos/200/300',
    pubblicato: true,
    link: 'https://medium.com',
    data: '23 Giugno 2021',
  },
  {
    titolo: 'Un altro progetto',
    immagine: 'https://picsum.photos/200/300',
    pubblicato: true,
    link: 'https://medium.com',
    data: '23 Giugno 2021',
  },
  {
    titolo: 'Un altro progetto ancora',
    immagine: 'https://picsum.photos/200/300',
    pubblicato: true,
    link: 'https://medium.com',
    data: '23 Giugno 2021',
  },
];

export type Preset = {
  name: 'dark' | 'light';
  colors: {
    text: string;
    background: string;
    link: string;
    border: string;
  };
  cursor: string;
};

export const presets: Preset[] = [
  {
    name: 'dark',
    colors: {
      text: 'white',
      background: 'black',
      link: '#ffc635',
      border: 'white',
    },
    cursor: 'http://www.javascriptkit.com/dhtmltutors/cursor-hand.gif',
  },
  {
    name: 'light',
    colors: {
      text: 'black',
      background: 'white',
      link: 'red',
      border: 'black',
    },
    cursor: '/images/cursor-red.gif',
  },
];

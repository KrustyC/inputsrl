export type Preset = {
  name: "dark" | "light";
  colors: {
    text: string;
    background: string;
    link: string;
    border: string;
  };
};

export const presets: Preset[] = [
  {
    name: "dark",
    colors: {
      text: "white",
      background: "black",
      link: "#ffc635",
      border: "white",
    },
  },
  {
    name: "light",
    colors: {
      text: "black",
      background: "white",
      link: "red",
      border: "black",
    },
  },
];

export interface CustomTheme {
  colors: {
    background: string;
    border: string;
    mediumText: string;
    primary: string;
    text: string;
    white: string;
  };
  dark: boolean;
}

const LightTheme: CustomTheme = {
  colors: {
    background: "#f9f7ef",
    border: "#ddd",
    mediumText: "#676354",
    primary: "#f57336",
    text: "#171100",
    white: "#fff",
  },

  dark: false,
};

const DarkTheme: CustomTheme = {
  colors: {
    background: "#f9f7ef",
    border: "#ddd",
    mediumText: "#676354",
    primary: "#f57336",
    text: "#171100",
    white: "#fff",
  },

  dark: true,
};

export { LightTheme, DarkTheme };

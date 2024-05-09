import ThemeInterface from "../app/objects/interfaces/theme.interface";

const orangeLight: ThemeInterface = {
  name: "material.orange.light",
  isThemeDark: false,
  properties: {
    "--dynamic-primary-color": "#EE5535",
    "--dynamic-primary-tone-color": "#FFFFFF",
    "--dynamic-secondary-tone-color": "#EEEEEE",
    "--dynamic-text-color": "#212121",
    "--dynamic-border-shadow-color": "0"
  }
};
const orangeDark: ThemeInterface = {
  name: "material.orange.dark",
  isThemeDark: true,
  properties: {
    "--dynamic-primary-color": "#EE5535",
    "--dynamic-primary-tone-color": "#363640",
    "--dynamic-secondary-tone-color": "#5D5D65",
    "--dynamic-text-color": "#FFF",
    "--dynamic-border-shadow-color": "256"
  }
};
const purpleLight: ThemeInterface = {
  name: "material.purple.light",
  isThemeDark: false,
  properties: {
    "--dynamic-primary-color": "#9D3BB0",
    "--dynamic-primary-tone-color": "#FFFFFF",
    "--dynamic-secondary-tone-color": "#EEEEEE",
    "--dynamic-text-color": "#212121",
    "--dynamic-border-shadow-color": "0"
  }
};
const purpleDark: ThemeInterface = {
  name: "material.purple.dark",
  isThemeDark: true,
  properties: {
    "--dynamic-primary-color": "#9D3BB0",
    "--dynamic-primary-tone-color": "#363640",
    "--dynamic-secondary-tone-color": "#5D5D65",
    "--dynamic-text-color": "#FFFFFF",
    "--dynamic-border-shadow-color": "256"
  }
};

const themes: ThemeInterface[] = [orangeLight, orangeDark, purpleLight, purpleDark];
export default themes;

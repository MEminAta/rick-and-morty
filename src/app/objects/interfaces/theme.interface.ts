import ThemePropertyInterface from "./theme-property.Interface";

export default interface ThemeInterface {
  name: string;
  isThemeDark: boolean;
  properties: ThemePropertyInterface;
}

import { Injectable } from "@angular/core";
import { LocalStorageService } from "./local-storage.service";
import themes from "../../styles/themes";
import ThemeInterface from "../objects/interfaces/theme.interface";
import DxThemeChanger from "devextreme/ui/themes";
import ThemePropertyInterface from "../objects/interfaces/theme-property.Interface";

@Injectable({
  providedIn: "root"
})
export default class ThemeService {
  private currentTheme?: ThemeInterface;

  constructor(private localStorageService: LocalStorageService) {}

  private firstTheme() {
    const lsThemeName = this.localStorageService.getTheme();
    if (lsThemeName != null) {
      const lsTheme = themes.find(x => x.name == lsThemeName);
      if (lsTheme != null) {
        return lsTheme;
      }
    }

    return themes[0];
  }

  setTheme(theme: ThemeInterface) {
    if (theme !== this.currentTheme) {
      DxThemeChanger.current(theme.name);
      this.localStorageService.setTheme = theme.name;
      this.currentTheme = theme;
      Object.keys(theme.properties).forEach(property => {
        document.documentElement.style.setProperty(
          property,
          theme.properties[property as keyof ThemePropertyInterface]
        );
      });
    }
  }

  setFirstTheme() {
    this.setTheme(this.firstTheme());
  }

  getCurrentTheme() {
    return this.currentTheme;
  }
}

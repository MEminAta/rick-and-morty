import { Component, EventEmitter, Input, Output } from "@angular/core";
import { DxCheckBoxModule, DxPopupModule, DxRadioGroupModule } from "devextreme-angular";
import themes from "../../../styles/themes";
import ThemeService from "../../services/theme.service";

@Component({
  selector: "app-settings",
  standalone: true,
  imports: [DxPopupModule, DxCheckBoxModule, DxRadioGroupModule],
  templateUrl: "./settings.component.html",
  styleUrl: "./settings.component.scss"
})
export class SettingsComponent {
  @Input() isOpen: boolean = false;
  @Output() isOpenChange = new EventEmitter<boolean>();

  themePrimaryColorNames: string[] = [];
  themeSecondaryColorNames: string[] = [];

  themePrimaryColorName: string;
  themeSecondaryColorName: string;

  currentThemeName: string;

  constructor(private readonly themeService: ThemeService) {
    themes.forEach(x => {
      this.themePrimaryColorNames.push(this.firstCharacterUpper(x.name.split(".")[1]));
      this.themeSecondaryColorNames.push(this.firstCharacterUpper(x.name.split(".")[2]));
    });

    this.themePrimaryColorNames = Array.from(new Set(this.themePrimaryColorNames));
    this.themeSecondaryColorNames = Array.from(new Set(this.themeSecondaryColorNames));

    this.currentThemeName = themeService.getCurrentTheme()!.name;
    this.themePrimaryColorName = this.firstCharacterUpper(this.currentThemeName.split(".")[1]);
    this.themeSecondaryColorName = this.firstCharacterUpper(this.currentThemeName.split(".")[2]);
  }

  themeChange() {
    const themeName = "material." + this.themePrimaryColorName + "." + this.themeSecondaryColorName;
    const theme = themes.find(x => x.name == themeName.toLowerCase())!;
    this.themeService.setTheme(theme);
  }

  firstCharacterUpper(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  emitter() {
    this.isOpenChange.emit(this.isOpen);
  }
}

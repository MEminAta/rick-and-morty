import { Component } from "@angular/core";
import { LocalStorageService } from "../../services/local-storage.service";
import UserDto from "../../objects/Dtos/userDto";
import AuthService from "../../services/auth.service";
import { SettingsComponent } from "../settings/settings.component";

@Component({
  selector: "app-navbar",
  standalone: true,
  imports: [SettingsComponent],
  templateUrl: "./navbar.component.html",
  styleUrl: "./navbar.component.scss"
})
export class NavbarComponent {
  user: UserDto;
  settingsIsOpen = false;

  constructor(
    private readonly localStorageService: LocalStorageService,
    private readonly authService: AuthService
  ) {
    this.user = localStorageService.getUser()!;
  }

  LogOut() {
    this.authService.logout();
  }

  settingsOpen() {
    this.settingsIsOpen = true;
  }
}

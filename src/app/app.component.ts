import { Component, OnDestroy } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import Text_Box from "devextreme/ui/text_box";
import Date_box from "devextreme/ui/date_box";
import Number_box from "devextreme/ui/number_box";
import Select_box from "devextreme/ui/select_box";
import AuthService from "./services/auth.service";
import ThemeService from "./services/theme.service";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./components/login/login.component";
import { Subject, takeUntil } from "rxjs";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { LoadingBarComponent } from "./components/loading-bar/loading-bar.component";
import { LoadingService } from "./services/loading.service";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, RouterOutlet, LoginComponent, NavbarComponent, SidebarComponent, LoadingBarComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss"
})
export class AppComponent implements OnDestroy {
  isLogged = false;
  unsubscribe = new Subject<void>();
  waitingRequestCount = 0;

  constructor(
    private readonly authService: AuthService,
    private readonly themeService: ThemeService,
    private readonly loadingService: LoadingService
  ) {
    authService.isLoggedObservable.pipe(takeUntil(this.unsubscribe)).subscribe(isLogged => this.loginControl(isLogged));

    this.setDevextremeEditorSettings();
    themeService.setFirstTheme();

    loadingService.waitingRequestCountObservable.subscribe(data => (this.waitingRequestCount = data));
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  setDevextremeEditorSettings() {
    Text_Box.defaultOptions({ options: { stylingMode: "underlined", labelMode: "floating" } });
    Date_box.defaultOptions({ options: { stylingMode: "underlined", labelMode: "floating" } });
    Number_box.defaultOptions({ options: { stylingMode: "underlined", labelMode: "floating" } });
    Select_box.defaultOptions({ options: { stylingMode: "underlined", labelMode: "floating" } });
  }

  loginControl(isLogged: boolean) {
    this.isLogged = isLogged;
  }
}

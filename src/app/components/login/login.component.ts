import { Component, ViewChild } from "@angular/core";
import { DxButtonModule, DxTextBoxComponent, DxTextBoxModule, DxValidatorModule } from "devextreme-angular";
import { Properties } from "devextreme/ui/button";
import AuthService from "../../services/auth.service";
import { TextBoxType } from "devextreme/ui/text_box";
import LoginRequestDto from "../../objects/Dtos/login-request.dto";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [CommonModule, DxTextBoxModule, DxButtonModule, DxValidatorModule],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.scss"
})
export class LoginComponent {
  @ViewChild("passwordTextBox", { static: false }) passwordTextBox!: DxTextBoxComponent;
  passwordButton: Properties;
  passwordButtonMode: TextBoxType = "password";
  loginDto: LoginRequestDto = new LoginRequestDto();
  fontSize: number = 12;

  constructor(private readonly authService: AuthService) {
    this.passwordButton = {
      type: "default",
      onClick: () => {
        this.passwordButtonMode = this.passwordButtonMode === "text" ? "password" : "text";
        this.passwordTextBox.instance.focus();
      },
      template: "textBoxButtonTemplate"
    };
  }

  login(e: SubmitEvent) {
    this.authService.login(this.loginDto);
    e.preventDefault();
  }

  infoFontSizeUp() {
    if (this.fontSize < 30) this.fontSize += 2;
  }
}

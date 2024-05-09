import { BehaviorSubject } from "rxjs";
import { Injectable } from "@angular/core";
import LoginRequestDto from "../objects/Dtos/login-request.dto";
import { LocalStorageService } from "./local-storage.service";
import LoginResponseDto from "../objects/Dtos/login-response.dto";
import UserDto from "../objects/Dtos/userDto";

@Injectable({
  providedIn: "root"
})
export default class AuthService {
  private isLoggedBehavior = new BehaviorSubject<boolean>(false);
  isLoggedObservable = this.isLoggedBehavior.asObservable();

  constructor(private localStorageService: LocalStorageService) {
    if (localStorageService.getUser() != null) {
      this.isLoggedBehavior.next(true);
    }
  }

  login(loginDto: LoginRequestDto): boolean {
    const data = this.loginValidate(loginDto);

    if (data.success && data.userDto != null) {
      this.isLoggedBehavior.next(true);
      this.localStorageService.setUser = data.userDto;
    }
    return data.success;
  }

  private loginValidate(loginDto: LoginRequestDto): LoginResponseDto {
    if (loginDto.mail == "sayko@jengal.com" && loginDto.password == "Sayko34") {
      return {
        success: true,
        userDto: new UserDto(
          "Sayko",
          "Kedi",
          "myToken",
          "https://cdn.dopingcloud.com/jengal/originals/jengal-team-kedi.png"
        )
      };
    } else return { success: false };
  }

  logout() {
    this.isLoggedBehavior.next(false);
    this.localStorageService.delUser();
  }
}

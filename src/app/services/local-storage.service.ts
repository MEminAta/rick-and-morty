import { Injectable } from "@angular/core";
import localStorageKeyConst from "../constants/local-storage-key.const";
import UserDto from "../objects/Dtos/userDto";

@Injectable({
  providedIn: "root"
})
export class LocalStorageService {
  set setTheme(themeName: string) {
    localStorage.setItem(localStorageKeyConst.theme, themeName);
  }

  getTheme() {
    return localStorage.getItem(localStorageKeyConst.theme);
  }

  set setUser(user: UserDto) {
    localStorage.setItem(localStorageKeyConst.user, JSON.stringify(user));
  }

  getUser(): UserDto | null {
    const jsonUser = localStorage.getItem(localStorageKeyConst.user);
    if (jsonUser != null) return JSON.parse(jsonUser);
    return null;
  }

  delUser() {
    localStorage.removeItem(localStorageKeyConst.user);
  }
}

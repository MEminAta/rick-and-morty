export default class LoginRequestDto {
  mail: string = "";
  password: string = "";

  constructor(
    private _mail?: string,
    private _password?: string
  ) {
    this.mail = _mail ?? "";
    this.password = _password ?? "";
  }
}

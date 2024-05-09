export default class UserDto {
  firstMame: string;
  lastName: string;
  imgUrl: string;

  constructor(
    private _firstName: string,
    private _lastName: string,
    private _token: string,
    private _imgUrl: string
  ) {
    this.firstMame = _firstName;
    this.lastName = _lastName;
    this.imgUrl = _imgUrl;
  }
}

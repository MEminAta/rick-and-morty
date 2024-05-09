import UserDto from "./userDto";

export default interface LoginResponseDto {
  success: boolean;
  userDto?: UserDto;
}

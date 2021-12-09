import { UserType } from '../types/user-type';

export class UserDTO {
  private fullName;
  private avatar;

  constructor(model: UserType) {
    this.avatar = model.avatar;
    this.fullName = model.fullName;
  }
}

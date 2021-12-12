import { UserType } from '../types/user-type';

export class UserDTO {
  fullName: string;
  avatar: string;

  constructor(model: UserType) {
    this.avatar = model.avatar;
    this.fullName = model.fullName;
  }
}

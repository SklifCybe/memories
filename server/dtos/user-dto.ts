import { UserType } from '../types/user-type';

export class UserDTO {
  fullName: string;
  avatar: string;
  id: string;

  constructor(model: UserType) {
    this.id = model._id;
    this.avatar = model.avatar;
    this.fullName = model.fullName;
  }
}

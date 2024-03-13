import { Role } from '../enums/Role';
import { IUser } from '../interfaces/IUser';

export class User implements IUser {
  constructor(
    private login: string,
    private password: string,
    private role: Role
  ) {}

  getLogin = () => {
    return this.login;
  };

  getPassword = () => {
    return this.password;
  };

  getRole = () => {
    return this.role;
  };
}

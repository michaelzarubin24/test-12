import { Component } from '@angular/core';
import { FormService } from '../../services/form.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrl: './add-user-form.component.css',
})
export class AddUserFormComponent {
  constructor(
    private userService: UserService,
    private formService: FormService
  ) {}

  add(data: any) {
    const isNotEmptyFields =
      data.login.trim().length > 0 &&
      data.password.trim().length > 0 &&
      data.type;

    if (isNotEmptyFields) {
      this.userService.add(data.login, data.password, data.type);

      this.formService.changeVisibilityUser();

      console.log('object');
    }
  }

  getVisibility() {
    return this.formService.getVisibilityUser();
  }
}

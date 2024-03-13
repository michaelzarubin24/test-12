import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.css',
})
export class AdminPannelComponent {
  constructor(
    private formService: FormService,
    private userService: UserService
  ) {}

  changeVisibilityProduct() {
    this.formService.changeVisibilityProduct();
  }
  changeVisibilityUser() {
    this.formService.changeVisibilityUser();
  }

  getUsers() {
    return this.userService.getAll();
  }
}

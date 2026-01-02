import { Component } from '@angular/core';

@Component({
  selector: 'app-role-permission',
  imports: [],
  templateUrl: './role-permission.html',
  styleUrl: './role-permission.scss',
})
export class RolePermission {
allSelected = false;

toggleSelectAll(): void {
  this.allSelected = !this.allSelected;

  const elements = document.querySelectorAll(
    '.form-check.form-check-md input[type="checkbox"]'
  ) as NodeListOf<HTMLInputElement>;

  elements.forEach(item => {
    item.checked = this.allSelected;
  });
}

}

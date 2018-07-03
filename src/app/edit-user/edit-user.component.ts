import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { User } from '../model/user.model';
import { UserService } from '../user.service';

@Component({
  selector: "app-edit-user",
  templateUrl: "./edit-user.component.html",
  styleUrls: ["./edit-user.component.css"]
})
export class EditUserComponent implements OnInit {
  user: User;
  editForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
    let userId = localStorage.getItem("editUserId");
    if (!userId) {
      alert("Invalid Action.");
      this.router.navigate(["list-user"]);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [],
      email: ["", Validators.required],
      firstName: ["", Validators.required],
      lastName: ["", Validators.required]
    });
    this.userService.getUserById(+userId).subscribe(data => {
      this.editForm.setValue(data);
    });
  }

  onSubmit() {
    console.log("editFormValue", this.editForm.value);
    this.userService
      .updateUser(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(["list-user"]);
        },
        error => {
          alert(error);
        }
      );
  }
}

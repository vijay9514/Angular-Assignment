import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../service/users.service';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {
  userformlabel = 'Edit Users';
  userformbtn = 'Update';
  constructor(private formBuilder: FormBuilder, private router: Router, private userservice: UsersService) {
  }

  editForm: any;
  ngOnInit() {
    this.editForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      address: this.formBuilder.group({
        city: ['', Validators.required],
       
      })
    });
  
    const userId: any = localStorage.getItem('edituserId');
    if (+userId > 0) {
      this.userservice.getUserById(+userId).subscribe((data:any) => {
        this.editForm.patchValue({
          id: data.id,
          name: data.name,
          username: data.username,
          email: data.email,
          address: {
            city: data.address.city,
           
          }
        });
      });
    }
  }
  
  onUpdate() {
    this.userservice.updateUser(this.editForm.value).subscribe(data => {
      this.router.navigate(['userList']);
    },
      error => {
        alert(error);
      });
  }
}


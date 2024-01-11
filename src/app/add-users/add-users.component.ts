import { Component } from '@angular/core';
import { FormBuilder ,FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent {
  userformlabel = 'Add User';
  userformbtn = 'Save';

  constructor(private formBuilder: FormBuilder, private router: Router, private userservice:UsersService) {}
  addForm:any;
  btnvisibility = true;
  ngOnInit() {

    this.addForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      address: this.formBuilder.group({
        city: ['', Validators.required],
        
      })
    });

  }
  onSubmit() {
    console.log('Create fire');
    console.log("sdgfjdsgfhsda",this.addForm.value)
    this.userservice.createUser(this.addForm.value)
      .subscribe((data:any) => {
        this.router.navigate(['userList']);
      },error => {
        alert(error);
      });
  }

}

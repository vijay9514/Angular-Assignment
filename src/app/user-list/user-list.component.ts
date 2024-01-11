import { Component } from '@angular/core';
import { users } from '../model/users.model';
import { UsersService } from '../service/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users: any=[];
  constructor(private userservice: UsersService, private router: Router, ) {
    
   }

  ngOnInit() {
  this.getUser()
  }
  getUser(){
    
    this.userservice.getUsers()
    .subscribe((data: users[]) => {
      this.users = data;
    });
  }
  deleteuser(user: any): void {
    this.userservice.deleteUser(user.id)
      .subscribe(data => {
        this.users = this.users.filter((u:any) => u !== user);
        this.getUser()
      });
  }
  editUser(user: any): void {
    localStorage.removeItem('edituserId');
    localStorage.setItem('edituserId', user.id.toString());
    this.router.navigate(['updateUser']);
  }

  addUser(): void {
    localStorage.removeItem('edituserId');
    this.router.navigate(['addUsers']);
  }
}


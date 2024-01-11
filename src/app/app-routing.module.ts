import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { AddUsersComponent } from './add-users/add-users.component';
import { EditUserComponent } from './edit-user/edit-user.component';

const routes: Routes = [
  { path: '', component: UserListComponent, pathMatch: 'full' },
  { path: 'userList', component: UserListComponent },
  { path: 'addUsers', component: AddUsersComponent },
  { path: 'updateUser', component: EditUserComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, data: {
    title: 'Login'
  } },
  { path: 'user', component: UserComponent, data: {
    title: 'User'}
  },
  // {
  //   path: '**', redirectTo: NotFoundComponent, pathMatch: 'full'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

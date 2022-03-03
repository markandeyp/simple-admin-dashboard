import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { UserListComponent } from './components/user-list/user-list.component';

const routes: Routes = [
  { path: 'user', component: FormComponent },
  {
    path: '',
    pathMatch: 'full',
    component: UserListComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

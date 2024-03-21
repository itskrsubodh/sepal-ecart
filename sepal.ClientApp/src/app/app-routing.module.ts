import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'user',
    loadComponent: () =>
      import('./feature/user/user.component').then((m) => m.UserComponent),
  },
  {
    path: 'userdetail',
    loadComponent: () =>
      import('./feature/userdetail/userdetail.component').then(
        (m) => m.UserdetailComponent
      ),
  },
  {
    path: 'userform',
    loadComponent: () =>
      import('./feature/userform/userform.component').then(
        (m) => m.UserformComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

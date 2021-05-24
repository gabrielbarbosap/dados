import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashGuard } from './helpers/dash.guard';

const appRoutes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('../app/components/login/login.module').then((m) => m.LoginModule),
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

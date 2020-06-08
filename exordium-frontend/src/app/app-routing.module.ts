import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './_pages/welcome/welcome.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full',
    data: {
      title: 'Welcome'
    }
  },
  {
    path: 'welcome',
    component: WelcomeComponent,
    data: {
      title: 'Welcome'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      enableTracing: true,
      scrollPositionRestoration: 'enabled'
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }

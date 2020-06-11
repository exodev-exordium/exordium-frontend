import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Blog
import { OverviewComponent } from './overview/overview.component';

const routes: Routes = [
  {
    path: 'general',
    component: OverviewComponent,
    data: {
      title: 'General'
    }
  },
  {
    path: 'resources',
    component: OverviewComponent,
    data: {
      title: 'Resources'
    }
  },
  {
    path: 'blog',
    component: OverviewComponent,
    data: {
      title: 'Blog'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }

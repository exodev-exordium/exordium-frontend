import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Pages
import { LocationsComponent } from './locations/locations.component';
import { NetworkStatusComponent } from './network-status/network-status.component';
import { SupportComponent } from './support/support.component';

const routes: Routes = [
  {
    path: 'general',
    data: {
      title: 'General'
    },
    children: [
      {
        path: 'locations',
        component: LocationsComponent,
        data: {
          title: 'Locations'
        }
      },
      {
        path: 'network-status',
        component: NetworkStatusComponent,
        data: {
          title: 'Network Status'
        }
      },
      {
        path: 'support',
        component: SupportComponent,
        data: {
          title: 'Support'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Pages
import { ReasonsForAVpnComponent } from './reasons-for-a-vpn/reasons-for-a-vpn.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { DocumentationComponent } from './documentation/documentation.component';

const routes: Routes = [
  {
    path: 'resources',
    data: {
      title: 'Resources'
    },
    children: [
      {
        path: 'reasons-for-a-vpn',
        component: ReasonsForAVpnComponent,
        data: {
          title: 'Reasons for a VPN'
        }
      },
      {
        path: 'tutorials',
        component: TutorialsComponent,
        data: {
          title: 'Tutorials'
        }
      },
      {
        path: 'documentation',
        component: DocumentationComponent,
        data: {
          title: 'Documentation'
        }
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourcesRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Routing
import { BlogModule } from './_pages/blog/blog.module';
import { GeneralModule } from './_pages/general/general.module';
import { ResourcesModule } from './_pages/resources/resources.module';
import { CompanyModule } from './_pages/company/company.module';

// Main
import { WelcomeComponent } from './_pages/welcome/welcome.component';
import { PricingComponent } from './_pages/pricing/pricing.component';
import { DownloadComponent } from './_pages/download/download.component';

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
  },
  {
    path: 'pricing',
    component: PricingComponent,
    data: {
      title: 'Pricing'
    }
  },
  {
    path: 'download',
    component: DownloadComponent,
    data: {
      title: 'Download'
    }
  }
];

@NgModule({
  imports: [
    CompanyModule,
    BlogModule,
    GeneralModule,
    ResourcesModule,
    RouterModule.forRoot(
      routes,
      {
        enableTracing: true,
        scrollPositionRestoration: 'enabled'
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

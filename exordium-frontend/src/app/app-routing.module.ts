import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Main
import { WelcomeComponent } from './_pages/welcome/welcome.component';
import { PricingComponent } from './_pages/pricing/pricing.component';
import { DownloadComponent } from './_pages/download/download.component';

// Blog

// Company
import { AboutComponent } from './_pages/company/about/about.component';
import { ContactComponent } from './_pages/company/contact/contact.component';


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
  },
  {
    path: 'blog',
    component: WelcomeComponent,
    data: {
      title: 'Blog'
    }
  },
  {
    path: 'company',
    children: [
      {
        path: 'about-us',
        component: AboutComponent,
        data: {
          title: 'About'
        }
      },
      {
        path: 'contact',
        component: ContactComponent,
        data: {
          title: 'Contact'
        }
      },
      {
        path: 'legal',
        component: WelcomeComponent,
        data: {
          title: 'Legal Information'
        }
      }
    ]
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

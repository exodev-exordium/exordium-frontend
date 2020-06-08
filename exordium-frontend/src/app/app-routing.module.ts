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
import { LegalComponent } from './_pages/company/legal/legal.component';
import { JobsComponent } from './_pages/company/jobs/jobs.component';
import { ReviewsComponent } from './_pages/company/reviews/reviews.component';


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
    path: 'general',
    component: WelcomeComponent,
    data: {
      title: 'General'
    }
  },
  {
    path: 'resources',
    component: WelcomeComponent,
    data: {
      title: 'Resources'
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
        component: LegalComponent,
        data: {
          title: 'Legal Information'
        }
      },
      {
        path: 'jobs',
        component: JobsComponent,
        data: {
          title: 'Jobs'
        }
      },
      {
        path: 'reviews',
        component: ReviewsComponent,
        data: {
          title: 'Service Reviews'
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

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Company
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { LegalComponent } from './legal/legal.component';
import { JobsComponent } from './jobs/jobs.component';
import { ReviewsComponent } from './reviews/reviews.component';


const routes: Routes = [
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
        path: 'our-team',
        component: OurTeamComponent,
        data: {
          title: 'Our Team'
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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }

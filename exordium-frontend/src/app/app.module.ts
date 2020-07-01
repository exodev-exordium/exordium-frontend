import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HashLocationStrategy, LocationStrategy  } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Plugins
import { RecaptchaModule, RecaptchaFormsModule, RECAPTCHA_SETTINGS, RecaptchaSettings } from 'ng-recaptcha';
import { InlineSVGModule } from 'ng-inline-svg';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ToastrModule } from 'ngx-toastr';

// App Component and Routing
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Universal Components
import { HeaderComponent } from './_components/header/header.component';
import { FooterComponent } from './_components/footer/footer.component';
import { SidebarComponent } from './_components/sidebar/sidebar.component';
import { ScrollbackComponent } from './_components/scrollback/scrollback.component';
import { NotyfToast } from './_components/notyf.toast';

// Main Pages
import { WelcomeComponent } from './_pages/welcome/welcome.component';
import { PricingComponent } from './_pages/pricing/pricing.component';
import { DownloadComponent } from './_pages/download/download.component';

// General
import { LocationsComponent } from './_pages/general/locations/locations.component';
import { NetworkStatusComponent } from './_pages/general/network-status/network-status.component';
import { SupportComponent } from './_pages/general/support/support.component';

// Resources
import { ReasonsForAVpnComponent } from './_pages/resources/reasons-for-a-vpn/reasons-for-a-vpn.component';
import { TutorialsComponent } from './_pages/resources/tutorials/tutorials.component';
import { DocumentationComponent } from './_pages/resources/documentation/documentation.component';

// Blog Pages
import { OverviewComponent } from './_pages/blog/overview/overview.component';
import { ArticleComponent } from './_pages/blog/article/article.component';
import { AuthorComponent } from './_pages/blog/author/author.component';

// Company Pages
import { AboutComponent } from './_pages/company/about/about.component';
import { ContactComponent } from './_pages/company/contact/contact.component';
import { OurTeamComponent } from './_pages/company/our-team/our-team.component';
import { LegalComponent } from './_pages/company/legal/legal.component';
import { JobsComponent } from './_pages/company/jobs/jobs.component';
import { ReviewsComponent } from './_pages/company/reviews/reviews.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ScrollbackComponent,
    NotyfToast,

    AppComponent,
    WelcomeComponent,
    PricingComponent,
    DownloadComponent,

    LocationsComponent,
    NetworkStatusComponent,
    SupportComponent,

    ReasonsForAVpnComponent,
    TutorialsComponent,
    DocumentationComponent,

    OverviewComponent,
    ArticleComponent,
    AuthorComponent,

    AboutComponent,
    ContactComponent,
    OurTeamComponent,
    LegalComponent,
    JobsComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    HttpClientModule,
    InlineSVGModule.forRoot(),
    ToastrModule.forRoot({
      toastComponent: NotyfToast,
      timeOut: 6000,
      positionClass: 'toast-bottom-right'
    }),
    AppRoutingModule
  ],
  entryComponents: [
    NotyfToast
  ],
  providers: [
    {
      provide : LocationStrategy,
      useClass: HashLocationStrategy
    },
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: '6LeB5uIUAAAAAMQWnwCUpUHbdsHO4iV4emdn9KOL'
      } as RecaptchaSettings,
    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

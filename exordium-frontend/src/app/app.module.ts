import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Universal Components
import { HeaderComponent } from './_components/header/header.component';
import { FooterComponent } from './_components/footer/footer.component';
import { SidebarComponent } from './_components/sidebar/sidebar.component';

// Pages
import { WelcomeComponent } from './_pages/welcome/welcome.component';
import { PricingComponent } from './_pages/pricing/pricing.component';
import { DownloadComponent } from './_pages/download/download.component';
import { AboutComponent } from './_pages/company/about/about.component';
import { ContactComponent } from './_pages/company/contact/contact.component';
import { LegalComponent } from './_pages/company/legal/legal.component';
import { OverviewComponent } from './_pages/blog/overview/overview.component';
import { ArticleComponent } from './_pages/blog/article/article.component';
import { AuthorComponent } from './_pages/blog/author/author.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,

    AppComponent,
    WelcomeComponent,
    PricingComponent,
    DownloadComponent,
    AboutComponent,
    ContactComponent,
    LegalComponent,
    OverviewComponent,
    ArticleComponent,
    AuthorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LogoAPComponent } from './components/logo-ap/logo-ap.component';
import { SocialComponent } from './components/social/social.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { AboutComponent } from './about/about.component';
import { ProyectsComponent } from './proyects/proyects.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuFooterComponent } from './components/menu-footer/menu-footer.component';
import { MenuHamburgComponent } from './components/menu-hamburg/menu-hamburg.component';
import { HttpClientModule } from '@angular/common/http';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SolutionsComponent } from './solutions/solutions.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { SocialFooterComponent } from './components/social-footer/social-footer.component';
import { LoaderComponent } from './components/loader/loader.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAPComponent,
    SocialComponent,
    FooterComponent,
    BannerComponent,
    AboutComponent,
    ProyectsComponent,
    MenuComponent,
    MenuFooterComponent,
    MenuHamburgComponent,
    SolutionsComponent,
    ServicesComponent,
    ContactComponent,
    SocialFooterComponent,
    LoaderComponent,

  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

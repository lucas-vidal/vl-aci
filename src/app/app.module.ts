import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LogoAPComponent } from './components/logo-ap/logo-ap.component';
import { SocialComponent } from './components/social/social.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { ProyectsComponent } from './proyects/proyects.component';
import { BtnLoginComponent } from './components/btn-login/btn-login.component';
import { SkillsComponent } from './skills/skills.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuFooterComponent } from './components/menu-footer/menu-footer.component';
import { MenuHamburgComponent } from './components/menu-hamburg/menu-hamburg.component';
import { HttpClientModule } from '@angular/common/http';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAPComponent,
    SocialComponent,
    LoginComponent,
    FooterComponent,
    BannerComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    ProyectsComponent,
    BtnLoginComponent,
    SkillsComponent,
    MenuComponent,
    MenuFooterComponent,
    MenuHamburgComponent,

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

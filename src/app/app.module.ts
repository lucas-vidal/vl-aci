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
import { AddExperienceComponent } from './components/add-experience/add-experience.component';
import { AddProyectComponent } from './components/add-proyect/add-proyect.component';
import { AddSkillComponent } from './components/add-skill/add-skill.component';
import { MenuHamburgComponent } from './components/menu-hamburg/menu-hamburg.component';
import { HttpClientModule } from '@angular/common/http';
import { DoughnutChartComponent } from './components/doughnut-chart/doughnut-chart.component';
import { UpdateEducationComponent } from './components/update-education/update-education.component';
import { UpdateExperienceComponent } from './components/update-experience/update-experience.component';
import { UpdateAboutComponent } from './components/update-about/update-about.component';
import { UpdateProyectComponent } from './components/update-proyect/update-proyect.component';
import { UpdateSkillComponent } from './components/update-skill/update-skill.component';
import { AddEducationComponent } from './components/add-education/add-education.component';
import { UpdateBannerComponent } from './components/update-banner/update-banner.component';
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
    AddExperienceComponent,
    AddProyectComponent,
    AddSkillComponent,
    MenuHamburgComponent,
    DoughnutChartComponent,
    UpdateEducationComponent,
    UpdateExperienceComponent,
    UpdateAboutComponent,
    UpdateProyectComponent,
    UpdateSkillComponent,
    AddEducationComponent,
    UpdateBannerComponent,
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

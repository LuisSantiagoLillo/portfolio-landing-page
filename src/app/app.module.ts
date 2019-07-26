import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// ng2-CHARTS
import { ChartsModule } from 'ng2-charts';


// COMPONENTS
import { HeaderComponent } from './components/header/header.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PieComponent } from './components/charts/pie/pie.component';
import { PolarAreaComponent } from './components/charts/polar-area/polar-area.component';
import { BarComponent } from './components/charts/bar/bar.component';
import { DynamicComponent } from './components/charts/dynamic/dynamic.component';
import { BubbleComponent } from './components/charts/bubble/bubble.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    NavigationComponent,
    PieComponent,
    PolarAreaComponent,
    BarComponent,
    DynamicComponent,
    BubbleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

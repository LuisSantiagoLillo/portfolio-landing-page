import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Angular Form

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// ** Modules Angular Fire 2
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
// **************************
import { environment } from '../environments/environment';

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
import { SocialMediaComponent } from './components/social-media/social-media.component';



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
    BubbleComponent,
    SocialMediaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase), // Angular Fire 2
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

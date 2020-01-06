import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { BioComponent } from './bio/bio.component';
import { MusicComponent } from './music/music.component';
import { CodeComponent } from './code/code.component';
import { CurrentComponent } from './current/current.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  imports: [ BrowserModule, 
             FormsModule, 
             RouterModule.forRoot([
               { path: '', component: HomeComponent },
               { path: 'bio', component: BioComponent },
               { path: 'music', component: MusicComponent },
               { path: 'current', component: CurrentComponent },
               { path: 'code', component: CodeComponent },
               { path: 'contact', component: ContactComponent },
              ]) 
            ],
  declarations: [ AppComponent, HelloComponent, NavBarComponent, HomeComponent, BioComponent, MusicComponent, CodeComponent, CurrentComponent, ContactComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

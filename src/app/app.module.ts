import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { AcademiaComponent } from './components/carnet/academia/academia.component';
import { ColegioComponent } from './components/carnet/colegio/colegio.component';
import { EvolisComponent } from './components/carnet/evolis/evolis.component';
import { EvolisrfidComponent } from './components/carnet/evolisrfid/evolisrfid.component';
import { CodebarPipe } from './pipes/codebar.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AcademiaComponent,
    ColegioComponent,
    EvolisComponent,
    EvolisrfidComponent,
    CodebarPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

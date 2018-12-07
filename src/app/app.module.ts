import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { 
  MatTabsModule, 
  MatMenuModule,
  MatDividerModule,
  MatGridListModule,
  MatSnackBarModule,
  MatListModule
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import 'hammerjs';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CustomMaterialModule } from './material.module';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';
import { ScoreboardComponent } from './components/scoreboard/scoreboard.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    NotFoundComponent,
    ScoreboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomMaterialModule,
    HttpModule,
    FormsModule,
    MatListModule,
    MatTabsModule,
    MatMenuModule,
    MatDividerModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MatSnackBarModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { MatTabsModule, MatMenuModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import 'hammerjs';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CustomMaterialModule } from './material.module';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';
import { ScoreboardComponent } from './components/scoreboard/scoreboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    ScoreboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomMaterialModule,
    HttpModule,
    MatMenuModule,
    MatTabsModule,
    ReactiveFormsModule,
    FormsModule,
    MatSnackBarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

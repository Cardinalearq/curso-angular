import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './core/services/auth-login.service';

import { SharedModule } from './shared/shared.module';
import { FeaturesModule } from './features/features.module'

@NgModule({
  declarations: [
    AppComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    FeaturesModule
  ],

  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

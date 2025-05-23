import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { FeaturesModule } from './features/features.module';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
<<<<<<< HEAD
import { rootReducer } from './core/store/index';
import { HttpClientModule } from '@angular/common/http';
=======
<<<<<<< HEAD
import { rootReducer } from './core/store/index';
=======
>>>>>>> db31503df3a004ae9590021ee9c5089eaeeff37e
>>>>>>> ffb4ba05b9559d65c9dbdd547389ebddcc0b34f3



@NgModule({
  declarations: [
    AppComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    HttpClientModule,
    CoreModule,
    FeaturesModule,
    SharedModule,
    StoreModule.forRoot(rootReducer, {}),
=======
    CoreModule,
    FeaturesModule,
    SharedModule,
<<<<<<< HEAD
    StoreModule.forRoot(rootReducer, {}),
=======
    StoreModule.forRoot({}, {}),
>>>>>>> db31503df3a004ae9590021ee9c5089eaeeff37e
>>>>>>> ffb4ba05b9559d65c9dbdd547389ebddcc0b34f3
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],

  providers: [
    // AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

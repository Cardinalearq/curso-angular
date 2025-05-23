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
import { rootReducer } from './core/store/index';
import { HttpClientModule } from '@angular/common/http';
import { CursoEffects } from './features/courses/store/courses.effects';
import { CursoService } from './core/services/curso.service';



@NgModule({
  declarations: [
    AppComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    FeaturesModule,
    SharedModule,
    StoreModule.forRoot(rootReducer, {}),
    EffectsModule.forRoot([CursoEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],

  providers: [
    // AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log('NgRx Store y Effects configurados correctamente');
  }
 }

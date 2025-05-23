import { NgModule } from '@angular/core';
// import { HttpClientModule } from '@angular/common/http';
import { provideHttpClient, withFetch } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    // HttpClientModule
  ],
  providers: [provideHttpClient(withFetch())]
})
export class CoreModule { }

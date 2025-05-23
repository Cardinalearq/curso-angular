import { NgModule } from '@angular/core';
<<<<<<< HEAD
// import { HttpClientModule } from '@angular/common/http';
import { provideHttpClient, withFetch } from '@angular/common/http';
=======
import { HttpClientModule } from '@angular/common/http';
>>>>>>> db31503df3a004ae9590021ee9c5089eaeeff37e



@NgModule({
  declarations: [],
  imports: [
<<<<<<< HEAD
    // HttpClientModule
  ],
  providers: [provideHttpClient(withFetch())]
=======
    HttpClientModule
  ]
>>>>>>> db31503df3a004ae9590021ee9c5089eaeeff37e
})
export class CoreModule { }

import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
=======
<<<<<<< HEAD
// import { HttpClientModule } from '@angular/common/http';
import { provideHttpClient, withFetch } from '@angular/common/http';
=======
import { HttpClientModule } from '@angular/common/http';
>>>>>>> db31503df3a004ae9590021ee9c5089eaeeff37e
>>>>>>> ffb4ba05b9559d65c9dbdd547389ebddcc0b34f3



@NgModule({
  declarations: [],
  imports: [
<<<<<<< HEAD
    HttpClientModule
  ],
    exports: [
    HttpClientModule
  ]

=======
<<<<<<< HEAD
    // HttpClientModule
  ],
  providers: [provideHttpClient(withFetch())]
=======
    HttpClientModule
  ]
>>>>>>> db31503df3a004ae9590021ee9c5089eaeeff37e
>>>>>>> ffb4ba05b9559d65c9dbdd547389ebddcc0b34f3
})
export class CoreModule { }

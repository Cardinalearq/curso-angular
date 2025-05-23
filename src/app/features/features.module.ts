import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardModule } from '../features/dashboard/dashboard.module';
import { AuthModule } from '../features/auth/auth.module';
import { CoursesModule } from '../features/courses/courses.module';
import { StudentsModule } from '../features/students/students.module';
<<<<<<< HEAD
import { UsersModule } from './users/users.module';
=======
>>>>>>> ffb4ba05b9559d65c9dbdd547389ebddcc0b34f3


@NgModule({
  declarations: [
<<<<<<< HEAD
    
=======

>>>>>>> ffb4ba05b9559d65c9dbdd547389ebddcc0b34f3
  ],
  imports: [
    CommonModule,
    DashboardModule,
    AuthModule,
    CoursesModule,
<<<<<<< HEAD
    StudentsModule,
    UsersModule
=======
    StudentsModule
>>>>>>> ffb4ba05b9559d65c9dbdd547389ebddcc0b34f3
  ],
  exports: [
    DashboardModule
  ]
})
export class FeaturesModule { }

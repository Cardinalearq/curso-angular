import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardModule } from '../features/dashboard/dashboard.module';
import { AuthModule } from '../features/auth/auth.module';
import { CoursesModule } from '../features/courses/courses.module';
import { StudentsModule } from '../features/students/students.module';
import { UsersModule } from './users/users.module';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    DashboardModule,
    AuthModule,
    CoursesModule,
    StudentsModule,
    UsersModule
  ],
  exports: [
    DashboardModule
  ]
})
export class FeaturesModule { }

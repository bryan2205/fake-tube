import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }

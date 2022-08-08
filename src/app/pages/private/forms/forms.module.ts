import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveDrivenComponent } from './reactive-driven/reactive-driven.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [FormsComponent, TemplateDrivenComponent, ReactiveDrivenComponent],
  imports: [CommonModule, FormsRoutingModule, SharedModule],
})
export class FormsModule {}

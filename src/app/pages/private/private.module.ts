import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { EserciziComponent } from './esercizi/esercizi.component';
import { CompVideoItemComponent } from './home/comp-video-item/comp-video-item.component';
import { CompVideoListComponent } from './home/comp-video-list/comp-video-list.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [EserciziComponent, HomeComponent, CompVideoListComponent],
  imports: [CommonModule, PrivateRoutingModule, SharedModule],
})
export class PrivateModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LikeComponent } from './components/like/like.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CompVideoItemComponent } from '../pages/private/home/comp-video-item/comp-video-item.component';
import { CustomErrorComponent } from './components/custom-error/custom-error.component';

const COMPONENTS = [NavbarComponent, FooterComponent, LikeComponent, PageNotFoundComponent, CompVideoItemComponent, CustomErrorComponent];
const PIPES = [TruncatePipe];
const MODULES = [RouterModule, FormsModule, ReactiveFormsModule, HttpClientModule];

@NgModule({
  declarations: [...COMPONENTS, ...PIPES],
  imports: [CommonModule, ...MODULES],
  exports: [...COMPONENTS, ...PIPES, ...MODULES],
})
export class SharedModule {}

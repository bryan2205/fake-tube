import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './forms.component';
import { ReactiveDrivenComponent } from './reactive-driven/reactive-driven.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';

const routes: Routes = [
  {
    path: '',
    component: FormsComponent,
    children: [
      {
        path: 'template-drive',
        component: TemplateDrivenComponent,
      },
      {
        path: 'reactive-form',
        component: ReactiveDrivenComponent,
      },
      {
        path: '',
        redirectTo: 'template-drive',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormsRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutGuard } from 'src/app/guards/aut-guard.guard';
import { EserciziComponent } from './esercizi/esercizi.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    canDeactivate: [AutGuard],
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'esercizi',
        component: EserciziComponent,
      },
      {
        path: 'watch',
        loadChildren: () => import('./watch/watch.module').then((m) => m.WatchModule),
      },
      {
        path: 'forms',
        loadChildren: () => import('./forms/forms.module').then((m) => m.FormsModule),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}

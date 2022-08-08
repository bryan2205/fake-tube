import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { AutGuard } from './guards/aut-guard.guard';

const routes: Routes = [
  {
    path: 'private',
    loadChildren: () => import('./pages/private/private.module').then((m) => m.PrivateModule),
    canActivate: [AutGuard],
    data: {
      level: '900',
    },
  },
  {
    path: 'public',
    loadChildren: () => import('./pages/public/public.module').then((m) => m.PublicModule),
  },
  {
    path: 'generic/:motivation',
    component: PageNotFoundComponent,
  },
  {
    path: '',
    redirectTo: 'private',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'generic/pageNotFound',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

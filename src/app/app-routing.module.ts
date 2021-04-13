import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    // component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./browse/browse.module').then(m => m.BrowseModule)
      },
      {
        path: ':category',
        loadChildren: () => import('./browse/browse.module').then(m => m.BrowseModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';


const routes: Routes = [
  {
    path:'',
    component:LayoutComponent,
    children:[
      {
        path:'movies',
        loadChildren:()=>import('./modules/movies/movies.module').then(m=>m.MoviesModule)
      },
      {
        path:'analytics',
        loadChildren:()=>import('./modules/analytics/analytics.module').then(m=>m.AnalyticsModule)
      },
      {
        path:'',
        redirectTo:'movies',
        pathMatch:'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }

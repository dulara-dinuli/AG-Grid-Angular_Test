import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaticAGGridComponent } from './static-ag-grid/static-ag-grid.component';
import { DynamicAGGridComponent } from './dynamic-ag-grid/dynamic-ag-grid.component';
import { FeaturesAGGridComponent } from './features-ag-grid/features-ag-grid.component';
import { CustomizedCRAGGridComponent } from './customized-cr-ag-grid/customized-cr-ag-grid.component';
import { AnimatedAGGridComponent } from './animated-ag-grid/animated-ag-grid.component';

const routes: Routes = [
  { path:'static-ag-grid', component:StaticAGGridComponent },
  { path:'dynamic-ag-grid', component:DynamicAGGridComponent },
  { path:'features-ag-grid', component:FeaturesAGGridComponent },
  { path:'customized-cr-ag-grid', component:CustomizedCRAGGridComponent },
  { path:'animated-ag-grid', component:AnimatedAGGridComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

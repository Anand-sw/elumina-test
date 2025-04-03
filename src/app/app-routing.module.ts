import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuilderComponent } from './builder/builder.component';

const routes: Routes = [  
  { path: '', redirectTo: 'formBuilder', pathMatch: 'full' },  
  { path: '**', component: BuilderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

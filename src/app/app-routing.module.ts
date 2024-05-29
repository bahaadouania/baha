import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BatimentListComponent } from './batiment-list/batiment-list.component';
import { BatimentFormComponent } from './batiment-form/batiment-form.component';
import { NotfoudComponent } from './notfoud/notfoud.component';


const routes: Routes = [
  { path: '', component: BatimentListComponent },
  { path: 'edit/:id', component: BatimentFormComponent },
  { path: 'add', component: BatimentFormComponent },
  { path: '**', component: NotfoudComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }

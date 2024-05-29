import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BatimentListComponent } from './batiment-list/batiment-list.component';
import { BatimentFormComponent } from './batiment-form/batiment-form.component';
import { FormsModule } from '@angular/forms';
import { NotfoudComponent } from './notfoud/notfoud.component';

@NgModule({
  declarations: [
    AppComponent,
    BatimentListComponent,
    BatimentFormComponent,
    NotfoudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

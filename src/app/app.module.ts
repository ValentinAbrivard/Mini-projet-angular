import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListeuserComponent } from './listeuser/listeuser.component';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing/app-routing.module';
import { CreationuserComponent } from './creationuser/creationuser.component'; 
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { DetailComponent } from './detail/detail.component'; 


@NgModule({
  declarations: [
    AppComponent,
    ListeuserComponent,
    CreationuserComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

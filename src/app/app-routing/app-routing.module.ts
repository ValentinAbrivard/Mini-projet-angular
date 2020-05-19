import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'; 
import { ListeuserComponent } from '../listeuser/listeuser.component';
import { CreationuserComponent } from '../creationuser/creationuser.component';
import { DetailComponent } from '../detail/detail.component';

const routes: Routes = [
  {path:'listusers',component:ListeuserComponent},
  {path:'creationuser', component:CreationuserComponent},
  {path:'detailuser/:id', component:DetailComponent},
  {path:'**',pathMatch:'full',redirectTo:'/listusers'} 
 ]


  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
    }) 
export class AppRoutingModule { }

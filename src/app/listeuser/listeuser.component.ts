import { Component, OnInit } from '@angular/core';
import { Users } from '../class/users';
import { ServiceUserService } from '../service-user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listeuser',
  templateUrl: './listeuser.component.html',
  styleUrls: ['./listeuser.component.css']
})
export class ListeuserComponent implements OnInit {

  constructor(private serviceUser:ServiceUserService, private route:ActivatedRoute) { }  
  users: Users[]; 
 


  ngOnInit(): void { 
    this.getAllUser();
    this.start();
  }
  
  start(){
    console.log('hello');
  }

  getAllUser(){
    
    this.serviceUser.getAll().subscribe(
    
    (value) => {
    this.users = value, console.log(value);
    console.log('Done resquest');
    },
    (error) => {
      console.log('ERROR' + error);
},
() => {
console.log('Observable complete');
}
);

} 

}



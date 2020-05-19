import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'; 
import { ServiceUserService } from '../service-user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-creationuser',
  templateUrl: './creationuser.component.html',
  styleUrls: ['./creationuser.component.css']
})
export class CreationuserComponent implements OnInit {
  userform = new FormGroup({
  email: new FormControl(''),
  isActive: new FormControl(true),
  firstname: new FormControl(''),
  lastname: new FormControl(''),
  age: new FormControl(''),
  company: new FormControl(''),
  phone: new FormControl(''),
  address: new FormControl(''),
  favoriteFruit: new FormControl('')
  }) 
   
  

  constructor(private serviceuser:ServiceUserService, private router:Router) { }

  ngOnInit(): void {
  }


    
onSubmit() {
console.log('Done resquest')
// TODO: Use EventEmitter with form value
console.warn(this.userform.value);
this.serviceuser.creationuser(this.userform.value);
this.router.navigate(['list-users']);
} 
 


}



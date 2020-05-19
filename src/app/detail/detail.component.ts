import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceUserService } from '../service-user.service';
import { Users } from '../class/users';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  errorMessage = '';
user:Users; 

  constructor(private route:ActivatedRoute, private serviceUser:ServiceUserService) { }

  ngOnInit(): void {
  const param = this.route.snapshot.paramMap.get('id');
  if (param) {
    const id = +param;
    this.getUser(id); 
  }
}

  
  
  getUser(id: number) {
    this.serviceUser.getUserId(id).subscribe({
    next: user => {this.user = user,console.log(user)},
    error: err => this.errorMessage = err
    });
    } 

}

import { Injectable } from '@angular/core';
import { Users } from './class/users';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServiceUserService {


  constructor(private http: HttpClient, private router:Router  ) {
   }

  private UsersUrl = 'http://localhost:3000/users';


getAll(): Observable<Users[]>{
return this.http.get<Users[]>(this.UsersUrl);
} 

getUserId(id):Observable<Users>{
  return this.http.get<Users>(`${this.UsersUrl}/${id}`);
  } 
  
creationuser(data:Users){

console.log(data);

this.http.post<Users>(`${this.UsersUrl}`,data).subscribe(user => {
console.log("utilisateur ajouter"),console.log(data)
});
} 
 


}



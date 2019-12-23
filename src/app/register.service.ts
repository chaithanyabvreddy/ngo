import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) {

   }

  registerUser(firstName:string,lastName:string,emailId:string,aadharCard:string,phoneNumer:number, userName:string,password:string){
    const obj = {
      firstName: firstName,
      lastName: lastName,
      emailId: emailId,
      aadharCard: aadharCard,
      phoneNumer: phoneNumer,
      userName: userName,
      password:password
      
    };
    console.log("in registerservice");
    return this.http.post(`http://localhost:8080/createUser`, obj);
        
  }
}


import { Injectable, Component, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  @Output() getLoggedInName: EventEmitter<string> = new EventEmitter();


  constructor(private http: HttpClient) { }

  setUserTOSession(userName:string){
    this.getLoggedInName.emit(userName);    
  }

  authenticateUser(userName:string,password:string) {
   
    const obj = {
      userName: userName,
      password: password
    };
    return  this.http.post(`http://localhost:8080/authenticateUser`, obj);
  }



  getUserDetails (userName:String){
    return this.http.get(`http://localhost:8080/getUserDetails?userName=` + userName );
 }


  updateUser(id:number,firstName:string,lastName:string,emailId:string,aadharCard:string,phoneNumer:string,userName:string,password:string) {
    const obj = {
      id:id,
      firstName: firstName,
      lastName: lastName,
      emailId: emailId,
      aadharCard: aadharCard,
      phoneNumer: phoneNumer,
      userName: userName,
      password:password
    };

    return  this.http.post(`http://localhost:8080/createUser`, obj);
  }


}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { UserService } from '../user.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userName:string=null;
  userDetail:any=null;
  userProfileForm: FormGroup;
  userMessage:string=null;

  constructor(private fb: FormBuilder, activatedRoute: ActivatedRoute,  private userservice: UserService) { 
    this.initForm()
    this.userMessage=null;
    this.userName = activatedRoute.snapshot.paramMap.get("userName");
    this.getUserDetails(this.userName);
  }
  
  initForm() {
    this.userProfileForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      emailId: [''],
      aadharCard:[''],
      phoneNumer: [''],
      userName: [''],
      password: ['']
    });
  }

 createForm(userDetail:any) {
  this.userProfileForm = this.fb.group({
    firstName: [userDetail.firstName],
    lastName: [userDetail.lastName],
    emailId: [userDetail.emailId],
    aadharCard:[userDetail.aadharCard],
    phoneNumer: [userDetail.phoneNumer],
    userName: [userDetail.userName],
    password: [userDetail.password]
  });
}

  ngOnInit() {
  }

  getUserDetails(userName:string){
    this.userservice.getUserDetails(userName).
    subscribe(res => {
                      console.log(res);
                      this.userDetail = res;
                      this.createForm(this.userDetail);
                     }
              );

  }

  updateUser(firstName:string,lastName:string,emailId:string,aadharCard:string,phoneNumer:string,userName:string,password:string,
              id:number) {
  	this.userservice.updateUser(id,firstName,lastName,emailId,aadharCard,phoneNumer,userName,password).
    subscribe(res => {
                      this.createForm(res);
                      this.userMessage="user updated successfully";
                     }
              );
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import {RegisterService} from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  registerationHeader:string="User Registration Service";
  sucessMessage:string;
  errorMessage:string;

  constructor(private fb: FormBuilder, private registerService:RegisterService) { 
    this.createForm();
  }
  
  ngOnInit() {
  }
  
  createForm() {
    this.registerForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      emailId: [''],
      aadharCard: [''],
      phoneNumer: [''],
      userName: [''],
      password:['']
    });
  }

  registerUser(firstName:string,lastName:string,emailId:string,aadharCard:string,phoneNumer:number, userName:string,password:string){
    this.registerService.registerUser(firstName,lastName,emailId,aadharCard,phoneNumer, userName, password).
    subscribe(
      res=>{
        console.log(res);
        this.sucessMessage="user created successfully"
        this.createForm();
        this.errorMessage='';
      },
      error=>{
        console.log(error);
        this.errorMessage="user cannot be created. check for any errors."
        this.sucessMessage='';
      }
    );
  }



  
}


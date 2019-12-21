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
      userName: ['']
    });
  }

  registerUser(firstName:string,lastName:string,emailId:string,aadharCard:string,phoneNumer:number, userName:string){
    this.registerService.registerUser(firstName,lastName,emailId,aadharCard,phoneNumer, userName);
  }



  
}


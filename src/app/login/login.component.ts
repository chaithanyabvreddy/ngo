import { OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { Component } from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


 loginForm: FormGroup;
 errorMessageExists: boolean=false;
 errorMessage: String = "";

constructor(private userservice: UserService,private fb: FormBuilder,
                      private router: Router) {
    this.createForm();
  }

   createForm() {
    this.loginForm = this.fb.group({
      userName: [''],
      password: ['']
    });
  }

  authenticateUser(userName,password) {
  	this.userservice.authenticateUser(userName,password).
    subscribe(res => {
                      this.userservice.setUserTOSession(userName);
                      this.router.navigate(['landing']);
                     },
              err => {
              		   console.log('HTTP Error', err),
              		  this.errorMessageExists = true,
              		  this.errorMessage = err.error.errorMessage
              		  }
              );
  }

  ngOnInit() {
  }


}

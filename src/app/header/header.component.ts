import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Subscription } from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  subscription: Subscription;
  userName: string = null;
  

  constructor(private userservice: UserService,private router: Router) { }


  ngOnInit() {
    this.userservice.getLoggedInName.subscribe(name => this.changeName(name));
  }

    private changeName(name: string): void {
        this.userName = name;
    }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  logout(){
    this.userName=null;
    this.router.navigate(['/']);
  }

}

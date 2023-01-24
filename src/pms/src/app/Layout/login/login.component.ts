import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/Services/auth-service.service';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public route:Router,private loginservice :LoginService,private authserv:AuthServiceService) { }

  public loginValid = true;
  public username:any = '';
  public password:any = '';

  ngOnInit(): void {
  }

  public onSubmit(): void {
    this.loginValid = true;
    const loginreq:any={
      username: this.username,
      password: this.password
    }
    this.loginservice.ValidateLogin().subscribe((retn:any)=>{
      if(retn !=null){
        this.authserv.setUserInfo(retn[0]);
        this.route.navigateByUrl("app/dashboard");
      }else{
        this.loginValid=false;
      }
    });
  }
}

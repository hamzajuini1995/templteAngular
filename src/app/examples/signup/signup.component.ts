import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'app/services/user.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    test : Date = new Date();
    focus;
    focus1;
    
    email = "";
    password = "";
    constructor(private userService: UserService, private router: Router) {
     }

    ngOnInit() {}

    login(){
        this.userService.login({
            email: this.email,
            password: this.password
        }).subscribe(res => {
            console.log(res)
            if(res.length > 0){
                localStorage.setItem('token', res);
                localStorage.setItem('mode', 'mode connection')
                this.router.navigate(['home']).then(() => {
                    location.reload();
                });
            }else{
                alert("Email ou Password incorrecte")
            }
        });
    }

    goToCreate(){
        this.router.navigate(['create-user'])
    }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'app/services/authentication.service';
import { LocalStorageManagerService } from 'app/services/local-storage-manager.service';
import { MangeStaffService } from 'app/services/mange-staff.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    data: Date = new Date();

    loginForm: FormGroup;
    constructor(private authService: AuthenticationService, private router: Router, private localStorageManager: LocalStorageManagerService) { }

    ngOnInit() {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('full-screen');
        body.classList.add('login');
        var navbar = document.getElementsByTagName('nav')[0];
        // navbar.classList.add('navbar-transparent');
        // if (navbar.classList.contains('nav-up')) {
        //     navbar.classList.remove('nav-up');
        // }
        this.loginForm = new FormGroup({
            email: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required)
        });

    }
    // ngOnDestroy(){
    //     var body = document.getElementsByTagName('body')[0];
    //     body.classList.remove('full-screen');
    //     body.classList.remove('login');
    //     var navbar = document.getElementsByTagName('nav')[0];
    //     navbar.classList.remove('navbar-transparent');
    // }

    async login() {
        const acces_token = await this.authService.login(this.loginForm.value);
        console.log(acces_token);
        if (acces_token) {
            this.localStorageManager.setToken(acces_token)
            this.router.navigate(['/admin/dashboard']);
        }

    }

}

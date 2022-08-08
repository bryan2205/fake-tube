import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'omnia-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private readonly authService: AuthService, private readonly router: Router) {}

  ngOnInit(): void {}

  login() {
    this.authService.login();
    this.router.navigate(['']);
  }
}

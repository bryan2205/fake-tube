import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'omnia-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() title: string = '';
  currentUser = null;
  constructor(private readonly authService: AuthService, private readonly router: Router) {}

  ngOnInit(): void {
    this.authService.me().subscribe({
      next: (user) => (this.currentUser = user),
    });
  }

  logout() {
    this.router.navigate(['public']);
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log("Login component initialized");
  }

  goBack(): void {
    this.router.navigate(['/ucelo']);
  }
}

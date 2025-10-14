import { ChangeDetectionStrategy ,Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterOutlet } from '@angular/router';
import { SideNavComponent } from '../../../layout/side-nav/side-nav.component';

@Component({
  selector: 'app-login',
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, RouterOutlet, SideNavComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  menuAberto = false;
  tipoUsuario: 'cliente' | 'funcionario' = 'cliente'; // pode vir do login

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log("Login component initialized");
  }

  goBack(): void {
    this.router.navigate(['/ucelo']);
  }
}

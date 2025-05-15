import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../auth.scss'],
})
export class LoginComponent {}

import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['../auth.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent {}

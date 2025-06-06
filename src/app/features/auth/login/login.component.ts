import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormInputComponent } from '../../../components/form-input/form-input.component';

@Component({
  selector: 'app-login',
  imports: [CommonModule, RouterLink, FormInputComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {}

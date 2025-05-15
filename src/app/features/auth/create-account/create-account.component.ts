import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-account',
  imports: [RouterLink],
  templateUrl: './create-account.component.html',
  styleUrls: ['../auth.scss', './create-account.component.scss'],
})
export class CreateAccountComponent {}

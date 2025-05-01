import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-account',
  imports: [RouterLink],
  templateUrl: './create-account.component.html',
  styleUrls: ['../auth.scss', './create-account.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CreateAccountComponent {}

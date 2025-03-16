import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(
    private readonly meta: Meta,
    private readonly faIconLibrary: FaIconLibrary
  ) {
    this.meta.addTag({
      name: 'description',
      content: 'Quality Furniture for Every Home & Office',
    });

    this.faIconLibrary.addIconPacks(fas);
  }
}

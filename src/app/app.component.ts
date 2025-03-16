import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private readonly meta: Meta) {
    this.meta.addTag({
      name: 'description',
      content: 'Quality Furniture for Every Home & Office',
    });
  }
}

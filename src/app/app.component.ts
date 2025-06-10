import { Component, inject } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { LogOutDialogComponent } from './components/log-out-dialog/log-out-dialog.component';
import { UiService } from './services/ui/ui.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LogOutDialogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private _uiService = inject(UiService);
  isLogoutDialogOpen = this._uiService.isLogoutDialogOpen;

  constructor(private readonly meta: Meta) {
    this.meta.addTag({
      name: 'description',
      content: 'Quality Furniture for Every Home & Office',
    });
  }
}

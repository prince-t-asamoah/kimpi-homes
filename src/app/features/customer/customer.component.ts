import { Component, inject } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { LanguageBarComponent } from '../../components/language-bar/language-bar.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { UiService } from '../../services/ui/ui.service';

@Component({
  selector: 'app-customer',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    LucideAngularModule,
    LanguageBarComponent,
    NavbarComponent,
    FooterComponent,
  ],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss',
})
export class CustomerComponent {
  private _uiService = inject(UiService);

  toggleLogoutDialog() {
    this._uiService.toggleLogoutDialog();
  }
}

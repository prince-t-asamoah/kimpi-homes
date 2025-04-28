import {
  Component,
  ElementRef,
  viewChild,
  ViewEncapsulation,
} from '@angular/core';
import { countries, languages } from '../../data/internalization';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-language-bar',
  imports: [LucideAngularModule],
  templateUrl: './language-bar.component.html',
  styleUrl: './language-bar.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class LanguageBarComponent {
  languageBarDialog =
    viewChild<ElementRef<HTMLDialogElement>>('languageBarDialog');
  countries = countries;
  languages = languages;

  openLanguageForm(): void {
    const dialogEl = this.languageBarDialog()?.nativeElement;
    if (!dialogEl) return;
    if (dialogEl.open) {
      dialogEl.close();
    }
    dialogEl.showModal();
  }

  closeLanguageForm(): void {
    this.languageBarDialog()?.nativeElement.close();
  }
}

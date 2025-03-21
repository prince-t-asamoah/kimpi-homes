import { Component, ElementRef, viewChild } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { countries, languages } from '../../data/internalization';

@Component({
  selector: 'app-language-bar',
  imports: [FontAwesomeModule],
  templateUrl: './language-bar.component.html',
  styleUrl: './language-bar.component.scss',
})
export class LanguageBarComponent {
  languageBarDialog =
    viewChild<ElementRef<HTMLDialogElement>>('languageBarDialog');
  countries = countries;
  languages = languages;

  openDialog(): void {
    if (this.languageBarDialog()?.nativeElement.open) {
      this.languageBarDialog()?.nativeElement.close();
    }
    this.languageBarDialog()?.nativeElement.showModal();
  }

  closeDialog(): void {
    this.languageBarDialog()?.nativeElement.close();
  }
}

import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { FormInputComponent } from '../form-input/form-input.component';

@Component({
  selector: 'app-customer-enquiry',
  imports: [LucideAngularModule, FormInputComponent],
  templateUrl: './customer-enquiry.component.html',
  styleUrl: './customer-enquiry.component.scss',
})
export class CustomerEnquiryComponent {}

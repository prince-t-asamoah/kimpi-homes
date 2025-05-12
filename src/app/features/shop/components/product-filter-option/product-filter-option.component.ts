import { NgClass, NgStyle } from '@angular/common';
import {
  Component,
  Input,
  EventEmitter,
  Output,
  numberAttribute,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-filter-option',
  imports: [NgStyle, NgClass, FormsModule],
  templateUrl: './product-filter-option.component.html',
  styleUrl: './product-filter-option.component.scss',
})
export class ProductFilterOptionComponent {
  @Input() filterName!: string;
  @Input({ required: true }) filterId!: string;
  @Input({ required: true }) filterType!: 'checkbox' | 'radio' | 'range';
  @Input({ required: true }) filterBy!: {
    id: string;
    name?: string;
    value?: unknown;
  }[];
  @Input({ transform: numberAttribute }) minRangeValue!: number;
  @Input({ transform: numberAttribute }) maxRangeValue!: number;
  @Input({ transform: numberAttribute }) rangeStep!: number;
  @Input({ transform: numberAttribute }) minRangeValueLimit!: number;
  @Input({ transform: numberAttribute }) maxRangeValueLimit!: number;
  @Output() filterChange = new EventEmitter<{
    id: string;
    values: string[];
  }>();
  private _selectedValues: string[] = [];

  get selectedValues(): string[] {
    return this._selectedValues;
  }

  onInputChange(event: Event) {
    const target = event.target as HTMLInputElement;
    if (this.filterType === 'range') {
      this.updateRangeTrackThumbPosition();
      this._selectedValues = [
        this.minRangeValue.toString(),
        this.maxRangeValue.toString(),
      ];
    }

    if (this.filterType === 'radio') {
      this._selectedValues = [target.value];
      this.filterChange.emit({
        id: this.filterId,
        values: this._selectedValues,
      });
    }

    this.filterChange.emit({
      id: this.filterId,
      values: this._selectedValues,
    });
  }

  getRangeTrackLeft(): number {
    return (
      ((Math.min(this.minRangeValue, this.maxRangeValue) -
        this.minRangeValueLimit) /
        (this.maxRangeValueLimit - this.minRangeValueLimit)) *
      100
    );
  }

  getRangeTrackWidth(): number {
    return (
      (Math.abs(this.maxRangeValue - this.minRangeValue) /
        (this.maxRangeValueLimit - this.minRangeValueLimit)) *
      100
    );
  }

  updateRangeTrackThumbPosition(): void {
    if (this.minRangeValue > this.maxRangeValue) {
      [this.minRangeValue, this.maxRangeValue] = [
        this.maxRangeValue,
        this.minRangeValue,
      ];
    }
  }
}

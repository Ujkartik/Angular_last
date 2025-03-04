import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ standalone: true, name: 'priceFormat' })
export class PricePipe implements PipeTransform {
  transform(value: number): string {
    return `₹ ${value}`;
  }
}

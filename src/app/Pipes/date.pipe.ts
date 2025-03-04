import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ standalone: true, name: 'dateFormat' })
export class DatePipe implements PipeTransform {
  transform(value: string): string {
    return new Date(value).toLocaleDateString('en-IN');
  }
}

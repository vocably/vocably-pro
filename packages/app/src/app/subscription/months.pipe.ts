import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'months',
})
export class MonthsPipe implements PipeTransform {
  transform(duration: number): string {
    return `month${duration > 1 ? 's' : ''}`;
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'saving',
})
export class SavingPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}

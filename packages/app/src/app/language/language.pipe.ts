import { Pipe, PipeTransform } from '@angular/core';
import { getFullLanguageName } from './getFullLanguageName';

@Pipe({
  name: 'language',
})
export class LanguagePipe implements PipeTransform {
  transform(code: string): string {
    return getFullLanguageName(code);
  }
}

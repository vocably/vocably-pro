import { Pipe, PipeTransform } from '@angular/core';
import languages from './languages';

@Pipe({
  name: 'language',
})
export class LanguagePipe implements PipeTransform {
  transform(code: string): string {
    // @ts-ignore
    return languages[code] ?? code;
  }
}

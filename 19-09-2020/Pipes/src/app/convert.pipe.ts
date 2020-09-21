import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: any, targetunits: String): any {
    if (!value) {
      
      return '';
    }
    switch (targetunits) {
      case 'km':
        return value * 1.609;
      case 'm':
        return value * 1.609 * 1000;
      case 'km':
        return value * 1000 * 1000;
      default:
        throw new Error('unit not supported');
        ;
        
      
    }
    return value * 1.60934 ;
  }

}

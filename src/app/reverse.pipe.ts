import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any): any {
    // var inputString = value as string;
    // var strArray = inputString.split('');
    // var reversedArray = strArray.reverse();

    // var reversedString = reversedArray.join('');

    // return reversedString;

    return value.split('').reverse().join('');
  }
}

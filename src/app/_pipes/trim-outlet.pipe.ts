import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimOutlet',
})
export class TrimOutletPipe implements PipeTransform {
  transform(value: unknown, outletName: string): unknown {
    return value + '' + `source : ${outletName}`;
  }
}

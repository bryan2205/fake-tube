import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, args: { end: number; dots: boolean } = { end: 15, dots: false }): string {
    const valueTransform = value.length > args.end ? value.substring(0, args.end) : value;
    return args.dots ? `${valueTransform}...` : valueTransform;
  }
}

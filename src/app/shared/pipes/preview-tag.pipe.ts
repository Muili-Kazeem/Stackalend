import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'previewTag',
  standalone: false
})
export class PreviewTagPipe implements PipeTransform {

  transform(value: string[] | string, max: number = 3): { tags: string[], extra: number } {
    if (!Array.isArray(value)) return { tags: [value], extra: 0 };

    const tags = value.slice(0, max);
    const extra = value.length > max ? value.length - max : 0;

    return { tags, extra };
  }

}

import { PipeTransform, Pipe} from "@angular/core";

@Pipe({
    name: 'shorten'
})
export class ShortenPipe implements PipeTransform {
    transform(value: string, maxLength: number = 50): string {
        if (value.length <= maxLength) {
            return value;
        }
        return value.substring(0, maxLength) + '...';
    }
}

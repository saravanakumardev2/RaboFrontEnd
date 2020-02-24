import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'myFilter',
    pure: false
})

export class FilterPipe implements PipeTransform {
    transform(items: any[], keyword: any, properties: string[]): any[] {
        console.log(" inside FilterPipe");
        console.log(items);
        if (!items) return [];
        if (!keyword) return items;
        debugger;
        return items.filter(item => {
          var itemFound: Boolean;
          for (let i = 0; i < properties.length; i++) {
            if (item[properties[i]].indexOf(keyword) !== -1) {
              itemFound = true;
              break;
            }
          }
          return itemFound;
        });
    
    }
}
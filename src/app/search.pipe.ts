import {Pipe, PipeTransform} from '@angular/core';
import {ApiService} from './api.service';
import {Shop} from './shop';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  constructor(private api: ApiService) {

  }

  public transform(shops: Shop[], query: string) {


    let results: Shop[] = [];
    if (query === '' || query == null) {
      results = [];
      this.api.length(0);
    } else {
      shops.forEach((shop) => {
        if (shop.name.toLowerCase().includes(query.toLowerCase()) ||
          shop.address.toLowerCase().includes(query.toLowerCase())) {
          results.push(shop);
        }
      });
    }
    this.api.length(results.length);

    return results;
  }

}

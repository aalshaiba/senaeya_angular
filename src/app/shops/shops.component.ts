import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import {Shop} from '../shop';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.css']
})
export class ShopsComponent implements OnInit {

  list: Shop[];
  query;
  list_count = [];

  constructor(private api: ApiService) {
  }

  ngOnInit() {

    this.api.getData().subscribe(data => {
      this.list = data;
      // this.list_count = this.list;
    });
    // this.api.lengthOut.subscribe((n) => {
    //   if (n === null) {
    //     this.list_count = this.list;
    //   } else {
    //     this.list_count = n;
    //   }
    // });

  }


}

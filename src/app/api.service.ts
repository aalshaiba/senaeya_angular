import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Shop} from './shop';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // url = 'assets/data/data.json';
  url = 'http://localhost:8000/api/shops/';

  private length1 = new BehaviorSubject<number>(0);
  public lengthOut = this.length1.asObservable();

  constructor(private http: HttpClient) {
  }

  getData() {
    return this.http.get<Shop[]>(this.url);
  }

  length(str) {
    this.length1.next(str);
  }


}

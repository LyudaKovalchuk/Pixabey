import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class HttpService {
  private api: string = 'https://pixabay.com/api/?key=2980920-46f1aa264b036ffc6e45ebad0&orientation=vertical&q=robot&min_height=500';

  constructor(private http: Http) { }
  getOptions(urlParams = {}) {
    const search = new URLSearchParams();
    Object.keys(urlParams).forEach(key => search.set(key.toString(), urlParams[key]));

    return new RequestOptions({ withCredentials: true, search });
  }

  getData() {
    return this.http.get(this.api).map((res) => res.json());
  }

}

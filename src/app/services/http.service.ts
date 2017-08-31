import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class HttpService {
  API_KEY = '2980920-46f1aa264b036ffc6e45ebad0';
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
  moreData(str){
    return this.http.get("https://pixabay.com/api/?key="+this.API_KEY+"&q="+encodeURIComponent(str))
        .map((res) => res.json());
  }

}

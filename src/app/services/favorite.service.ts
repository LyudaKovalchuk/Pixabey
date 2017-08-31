import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs/Rx';

@Injectable()
export class FavoriteService {

  private _favorites: Subject<any> = new Subject<any>();
  favorites: Observable<any> = this._favorites.asObservable();

  constructor() {
    const favorites = JSON.parse(localStorage.getItem("favorites"));
    this._favorites.next(favorites);
  }

  save(item) {
    if (localStorage.getItem("favorite")) {
      let temp = JSON.parse(localStorage.getItem("favorite"));
      temp.push(item)
      localStorage.setItem("favorite", JSON.stringify(temp));
    }
    else localStorage.setItem("favorite", JSON.stringify([item]));
  }

  delete(item, index) {
    let temp = JSON.parse(localStorage.getItem("favorite"));
    let newTemp = temp.filter( (item, ind) => {
      if (ind != index) return item;
    })
    localStorage.setItem("favorite", JSON.stringify(newTemp));
  }

}

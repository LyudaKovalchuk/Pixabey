import { Injectable } from '@angular/core';
import {Subject, Observable, BehaviorSubject} from 'rxjs/Rx';

@Injectable()
export class FavoriteService {

  private _favorites: Subject<any> = new BehaviorSubject<any>([]);
  favorites: Observable<any> = this._favorites.asObservable();

  constructor() {
    const favorites = JSON.parse(localStorage.getItem("favorite"));
    this._favorites.next(favorites);
  }
  save(item) {
    let favorites = this.getFavorites();
    favorites.push(item);
    this.updateFavorites(favorites);
  }

  delete(item) {
    let favorites = this.getFavorites();
    favorites = favorites.filter((element) => element.id != item.id);
    item.favorite = false;
    this.updateFavorites(favorites);
  }

  getFavorites() {
    let favorites = localStorage.getItem("favorite");
    return favorites ? JSON.parse(favorites) : [];
  }

  updateFavorites(favorites) {
    localStorage.setItem("favorite", JSON.stringify(favorites));
    this._favorites.next(favorites);
  }

}

import {Component, OnInit, Input, OnChanges, SimpleChange} from '@angular/core';
import { HttpService } from '../../services/http/http.service';
import { FavoriteService } from '../../services/favorite/favorite.service'
import 'rxjs/Rx';

@Component({
  selector: 'app-item-container',
  templateUrl: './item-container.component.html',
  styleUrls: ['./item-container.component.scss']
})
export class ItemContainerComponent implements OnInit,OnChanges {
  @Input() newHits;
  hits : any;
  favorites: any;


  constructor( private api: HttpService, private fav: FavoriteService) { }

  ngOnInit() {
    this.api.getData()
    .subscribe( (response)=> {
      this.hits = response.hits;
      this.fav.favorites.subscribe( (favorites) => {
        this.favorites = favorites;
      })
       this.hits.map( (item)=> {
        this.favorites.forEach( (fav) => {
          if (item.id == fav.id)
            item.favorite = true
        })
      })
     })
  }

  approve(event,index){
    event.target.offsetParent.style.backgroundColor = "lightgreen";
    this.hits[index].likes++;
    event.target.style.pointerEvents="none";
    document.getElementById("dislike"+index).style.pointerEvents = "";

  }
  dislike(event,index) {
    event.target.offsetParent.style.backgroundColor = "red";
    this.hits[index].likes--;
    event.target.style.pointerEvents = "none";
    document.getElementById("like"+index).style.pointerEvents = "";
  }
  closeItem(index) {
    let newHits = this.hits.filter( (item, ind) => {
      if ( item != this.hits[index] )
        return item;
    })
    this.hits = newHits;
  }
  addToFavorite(item) {
    this.fav.save(item);
    item.favorite = true;
  }
  removeFromFavorite(item){
    this.fav.delete(item);
    item.favorite = false;
  }
  ngOnChanges(changes: any) {
    console.log(changes);
    this.hits = changes.newHits.currentValue.hits;

  }
}

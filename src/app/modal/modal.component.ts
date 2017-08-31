import { Component, OnInit, Input, Output, OnChanges, EventEmitter, animate} from '@angular/core';
import { trigger, transition, style} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FavoriteService } from 'app/services/favorite.service'


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]
})
export class ModalComponent implements OnInit {
  @Input() closable = true;
  @Input() visible: boolean;

  values : Array<any> = [];

  constructor( private fav:FavoriteService) {

  }

  ngOnInit() {
    this.fav.favorites.subscribe( (favorites) => {
      this.values = favorites;
    })
  }
  closeItem(item,index){
    let newValues = this.values.filter( (item, ind) => {
      if ( item != this.values[index] ) return item;
    })
    this.values = newValues;
    this.fav.delete(item);
  }
  close() {
    this.visible = false;
    console.log(this.values)
  }
}

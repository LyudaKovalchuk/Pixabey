import {Component, OnInit, ViewChild, ElementRef, Output, EventEmitter} from '@angular/core';
import { HttpService } from '../../services/http/http.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('input1') input;
  @Output() loadData:EventEmitter<any> = new EventEmitter();

  constructor(private api: HttpService) { }

  ngOnInit() {
  }
  request(){
    let str = this.input.nativeElement.value;
    this.api.moreData(str).subscribe((resp) => {
      console.log(resp);
      this.loadData.emit(resp);

    })

  }
}

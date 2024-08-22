import { Component, Input } from '@angular/core';
import { Item } from '../interface/item.interface';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.css']
})
export class AccordianComponent {
  @Input() items: Item[] = [];
  openedIndexItem = 0;
  constructor () { }
  onClick(index: number){
    if(index === this.openedIndexItem){
      this.openedIndexItem = -1;
    }
    else {
      this.openedIndexItem = index;
    }
  }

}

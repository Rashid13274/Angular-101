import { Component } from '@angular/core';
import { Item } from '../interface/item.interface';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent {
  modelOpen = false; 
  items: Item[] = [
    {title: 'Why is the sky blue', content: 'The sky is blue beacause it is'},
    { title: 'Why sea is so big', content: 'It is due continous process of earth evoluation' },
    { title: 'How does the tree make food', content: 'Tree make food through the prcess known as photsynthesis' },


  ]
  constructor() { }

  onClick() {
    this.modelOpen = !this.modelOpen;
  }

}

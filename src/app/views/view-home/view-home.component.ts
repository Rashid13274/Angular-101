import { Component, OnInit } from '@angular/core';
import { Item } from '../model/items-model';

@Component({
  selector: 'app-view-home',
  templateUrl: './view-home.component.html',
  styleUrls: ['./view-home.component.css']
})
export class ViewHomeComponent  implements OnInit{ 
  stats: any = [
  {
    value: 50, label:'# Users',
  },
  {
    value: 500, label:'Revenues',
  },
  {
    value: 100, label:'Reviews',
  }
];

  items: Item[] = [
  { image: '/assets/images/JPEG_example_flower.jpg',
    title: 'flower',
    description: 'This is beautiful flower'
  },
  { image: '/assets/images/Moeraki-Boulders-New-Zealand.jpg',
    title: 'nature',
    description: 'this is a great view of nature'
   }

]
  constructor() { }
  ngOnInit(): void {
      
  }

}

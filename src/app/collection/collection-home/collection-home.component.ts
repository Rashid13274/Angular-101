import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection-home',
  templateUrl: './collection-home.component.html',
  styleUrls: ['./collection-home.component.css']
})
export class CollectionHomeComponent implements OnInit {
  public data: any = [
    {name:'jamees', age:10, job:'Engineer', employed: true},
    {name:'jon', age:20, job:'Engineer', employed: false},
    {name:'jack', age:30, job:'Engineer', employed: true},
  ]

  public headers:any = [
    {key:'employed', label:'Has a Job ?'},
    {key:'name', label:'Name'},
    {key:'age', label:'Age'},
    {key:'job', label:'Job'}
  ]
  constructor(){ }

  ngOnInit(): void {
      
  }

}

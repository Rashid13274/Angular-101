import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() className: any = '';
  @Input() data: any = [];
  @Input() headers: any = [];

  constructor(){ }
  ngOnInit(): void {
      
  }

}

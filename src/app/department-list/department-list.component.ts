import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent {
  // @Input() public parentData : any; // or
  @Input('parentData') public name: any;
  @Input('newParentData') public highlightColor: any;
  @Output() childEvent = new EventEmitter()
  public red = 'green';
  constructor(){ }
  fireEvent(){
    this.childEvent.emit('hey md rashid !');
  }


  makeNewEventfn(){
    this.childEvent.emit('new child to parent message');
  }

}

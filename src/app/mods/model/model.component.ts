
import { Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {
  @Output() close = new EventEmitter();
  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    // Attach the modal element to the body
    document.body.appendChild(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.el.nativeElement.remove();
  }

  /* child to parent communication */
  onCloseClick() {
    this.close.emit();
  }
}

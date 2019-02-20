import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input()
  onewaybindChild: string;
  
  @Output()
  emitOnewaybindChild = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onEmit(event){
    this.emitOnewaybindChild.emit(event.target.value);
    this.onewaybindChild=event.target.value;
    // console.log(event);
  }

}

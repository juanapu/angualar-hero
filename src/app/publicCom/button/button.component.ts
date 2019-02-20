import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Output()
  clickbtn = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick(event){
    this.clickbtn.emit(event);
  }

}

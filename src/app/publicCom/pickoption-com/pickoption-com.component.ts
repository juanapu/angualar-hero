import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pickoption-com',
  templateUrl: './pickoption-com.component.html',
  styleUrls: ['./pickoption-com.component.scss']
})
export class PickoptionComComponent implements OnInit {

  @Input()
  option: object;

  @Output()
  changeOption: EventEmitter<string> = new EventEmitter();

  bgclr: string;

  constructor() { }

  ngOnInit() {

  }

  onChangeOption(val) {
    this.bgclr = val;
    const optionval = val.split(' ').slice(0, -2).join(' ').trim();
    this.changeOption.emit(optionval);
  }
}

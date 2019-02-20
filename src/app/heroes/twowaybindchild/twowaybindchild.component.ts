import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-twowaybindchild',
  templateUrl: './twowaybindchild.component.html',
  styleUrls: ['./twowaybindchild.component.scss']
})
export class TwowaybindchildComponent implements OnInit {
  @Input()
  twowaybindingChild: string;

  constructor() { }

  ngOnInit() {
  }

}

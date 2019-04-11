import { Component, OnInit, Input } from '@angular/core';
import { PageData } from './tbnl-model';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss']
})
export class ThumbnailComponent implements OnInit {

  private _data = [];

  @Input()
  get data(): PageData[] {
    return this._data;
  }
  set data(value) {
    this._data = value;
  }

  constructor() {
   }

  ngOnInit() {
  }

}

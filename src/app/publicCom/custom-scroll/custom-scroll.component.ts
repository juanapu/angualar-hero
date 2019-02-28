import { Component, OnInit } from '@angular/core';
import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import { MyDataSource } from './mydatasource';

@Component({
  selector: 'app-custom-scroll',
  templateUrl: './custom-scroll.component.html',
  styleUrls: ['./custom-scroll.component.scss']
})
export class CustomScrollComponent implements OnInit {
  ds = new MyDataSource();

  constructor() { }

  ngOnInit() {
  }

}

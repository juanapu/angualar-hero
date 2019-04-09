import { Component, OnInit } from '@angular/core';
import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import { TbnlDataSource } from './tbnl-datasource';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss']
})
export class ThumbnailComponent implements OnInit {
  dataSource = new TbnlDataSource();

  constructor() { }

  ngOnInit() {
  }

}

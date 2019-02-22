import { Component, OnInit } from '@angular/core';
import { XpDatasource, XpPlaceholderDatasource } from '@hyland/experience';
import { HttpClient } from '@angular/common/http';
import { MyDataSource } from './mydatasource';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  myDatasource: XpDatasource;

  constructor(private http: HttpClient) {
    this.myDatasource = new MyDataSource(this.http);
   }

  ngOnInit() {
  }

}

import { Component, OnInit,OnDestroy } from '@angular/core';
import { XpDatasource, XpPlaceholderDatasource } from '@hyland/experience';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MyDataSource } from './mydatasource';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit,OnDestroy{
  myDatasource: XpDatasource;

  constructor(private http: HttpClient) {
    // this.myDatasource = new MyDataSource(this.http);
    // console.log(this.myDatasource);
   }

  ngOnInit() {
  }

  ngOnDestroy(){
    // this.myDatasource.getPage$().subscribe().unsubscribe();
  }

}

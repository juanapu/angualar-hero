import { Component, OnInit, OnDestroy } from '@angular/core';
import { XpDatasource, XpPlaceholderDatasource, XpDocumentModel, XpPageDataModel } from '@hyland/experience';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MyDataSource } from './mydatasource';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit, OnDestroy{
  myDatasource: XpDatasource;

  constructor(private http: HttpClient) {
    // this.myDatasource = new MyDataSource(this.http);
    // console.log(this.myDatasource);
    this.myDatasource = new XpPlaceholderDatasource({
      pageCount: 10,
      pages: [],
    });
   }

  ngOnInit() {
  }

//   myDatasource?: XpDatasource;

//   constructor(private http: HttpClient) {
    
//   }

//   ngOnInit() {
//     // this.http.get(
//     //   `assets/Sample.png`,
//     //   { responseType: 'blob' },
//     // ).pipe(
//     //   map(blob => ({
//     //     pageId: '1',
//     //     type: 'image/png',
//     //     blob,
//     //   })),
//     // ).subscribe(val => { 
//     //   console.log(val)
//     //   console.log('here ---')
//     // });
    
//     this.myDatasource = new SampleDatasource(this.http, '1');
//   }

  ngOnDestroy(){
//     // this.myDatasource.getPage$().subscribe().unsubscribe();
  }

}

// class SampleDatasource implements XpDatasource {

//   constructor(
//     private http: HttpClient,
//     private documentId: string,
//   ) {}

//   readonly model: XpDocumentModel = {
//     pageCount: 1,
//     type: 'image',
//   };

//   getPage$(pageId: string): Observable<XpPageDataModel> {
//     return this.http.get(`assets/documents/1_1.png`,
//       { responseType: 'blob' },
//     ).pipe(
//       map(blob => ({
//         pageId,
//         type: 'image/png',
//         blob,
//       })),
//     );
//   }
// }

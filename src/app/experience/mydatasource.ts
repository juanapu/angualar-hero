import { Observable } from 'rxjs';
import { map,tap } from 'rxjs/operators';
import { XpDatasource, XpDocumentModel, XpPageDataModel } from '@hyland/experience';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MyDataSource implements XpDatasource {
    // private url = 'api/imagedata';

    constructor(private http: HttpClient){}

    readonly model: XpDocumentModel = {
        pageCount: 1,
        type: 'image',
    };

    getPage$(pageId: string): Observable<XpPageDataModel>{
        return this.http.get('assets/Sample.png',
        {responseType: 'blob'}
        )
        .pipe(
            tap(val=>{
                console.log('below is resource')
                console.log(val)
            }),
            map(blob=>({
                type: 'image/png',
                blob,
            }))
        )
    }
}
import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import { Observable, Subscription , BehaviorSubject} from 'rxjs';
import { PageData } from './tbnl-model';

export class TbnlDataSource extends DataSource<string | undefined> {
    private cachedData = Array.from<string>({length: 10});
    // private cachedData: string[];
    private dataStream = new BehaviorSubject<(string | undefined)[]>(this.cachedData);
    private subscription = new Subscription();

    connect(collectionViewer: CollectionViewer): Observable<(string | undefined)[]>{
        this.dataStream.next(this.cachedData);
        // this.subscription.add(collectionViewer.viewChange.subscribe(range => {
        //    this.fetchData(range.start, range.end, (range.end < this.cachedData.length) ? (range.end - range.start + 1)
        //    : (range.end - range.start));
        // }));
        return this.dataStream;
    }

    disconnect(): void {
        this.subscription.unsubscribe();
    }

    fetchData(start: number, end: number, lth: number): void {
        console.log(`start: ${start}, end${end}, length: ${lth}`)
        // setTimeout(() => {
            // this.cachedData.splice(start, lth);
            console.log(this.cachedData);
            this.dataStream.next(this.cachedData);
        // }, Math.random() * 1000 + 200);
    }

    updateData(data: PageData[]) {
        this.cachedData = data.map(({id, meta, content}) => {
            return content;
        });
    }
}

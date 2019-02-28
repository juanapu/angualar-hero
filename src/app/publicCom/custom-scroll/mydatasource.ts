import {CollectionViewer, DataSource}  from '@angular/cdk/collections';
import { Observable, Subscription ,BehaviorSubject} from 'rxjs';

export class MyDataSource extends DataSource<string | undefined>{
    private cachedData = Array.from<string>({length: 10000});
    private pageSize:number = 10000;
    private dataStream = new BehaviorSubject<(string | undefined)[]>(this.cachedData);
    private subscription = new Subscription();

    connect(collectionViewer: CollectionViewer): Observable<(string | undefined)[]>{
        this.subscription.add(collectionViewer.viewChange.subscribe(range=>{
           this.fetchData(range.start,range.end,(range.end<this.pageSize)?(range.end-range.start+1):(range.end-range.start));
        }))
        return this.dataStream    
    }

    disconnect():void{
        this.subscription.unsubscribe();
    }

    fetchData(start,end,lth):void{
        setTimeout(()=>{
            this.cachedData.splice(start,lth,
                ...Array.from({length: lth})
                .map((_,i)=>`item #${start+i}`)
            );
            this.dataStream.next(this.cachedData);
            console.log(this.cachedData);
        },Math.random() * 1000 + 200);
    }
}
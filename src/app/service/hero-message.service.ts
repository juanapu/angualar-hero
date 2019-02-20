import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroMessageService {

  message: Subject<string[]>;
  title: string = 'Message title';

  constructor() {
    this.message = new Subject();
    this.message.subscribe(val=>{
      
    });
    this.message.next(['first message']);
   }

  onClear(): void {
    // this.message.next([]);
  }

  onChangeMessage(): void{
    this.title = 'changed message title';
  }

}

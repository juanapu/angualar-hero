import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  defaultcr:string = '#e4e7ea';
  defaultclr: Subject<string> = new BehaviorSubject('#e4e7ea');
  color: Subject<string> = new BehaviorSubject(this.defaultcr);

  constructor() { }

  changeColor(clr){
    this.color.next(clr);
  }

  resetColor(){
    this.color.next(this.defaultcr);
  }

  changeDefaultColor(clr){
    this.defaultcr = clr;
    this.defaultclr.next(clr);
    this.changeColor(clr);
  }


}

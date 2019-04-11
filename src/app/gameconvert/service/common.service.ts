import { Injectable } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';

@Injectable()
export class CommonService {

  mouseCoordinate: Observable<Event>;

  constructor() {
  }

  getMouseCoordinate(target: HTMLElement) {
    this.mouseCoordinate = fromEvent(target, 'mousemove');
  }

  lerpDistance(aim: number, cur: number, ratio: number) {
    const delta = cur - aim;
    return aim + delta * ratio;
  }

}

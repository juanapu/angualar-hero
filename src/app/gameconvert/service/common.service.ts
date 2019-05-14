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

  lerpAngle(aim: number, cur: number, ratio: number) {
    let delta = cur - aim;
    if (delta > Math.PI) {
      delta = delta - 2 * Math.PI;
    }
    if (delta < -Math.PI) {
      delta = delta + 2 * Math.PI;
    }
    return aim + delta * ratio;
  }

}

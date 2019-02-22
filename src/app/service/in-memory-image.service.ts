import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Image } from '../class/image';
import { Injectable } from '@angular/core';
import { IMAGEDATA } from '../mockdata/imagedata';

@Injectable({
  providedIn: 'root',
})
export class InMemoryImageService implements InMemoryDbService {
  createDb() {
    const imagedata = IMAGEDATA;
    return {imagedata};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(imagedata: Image[]): number {
    return imagedata.length > 0 ? Math.max(...imagedata.map(imgdt => imgdt.id)) + 1 : 11;
  }
}
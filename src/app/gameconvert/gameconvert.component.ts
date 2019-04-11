import { Component, OnInit, ElementRef } from '@angular/core';
import { CommonService } from './service/common.service';
@Component({
  selector: 'app-gameconvert',
  templateUrl: './gameconvert.component.html',
  styleUrls: ['./gameconvert.component.scss'],
  providers: [{
    provide: CommonService, useClass: CommonService
  }]
})
export class GameconvertComponent implements OnInit {

  constructor(
    private commonService: CommonService,
    private eleRef: ElementRef,
  ) {
    const ele = this.eleRef.nativeElement as HTMLElement;
    this.commonService.getMouseCoordinate(ele);
   }

  ngOnInit() {
  }

}

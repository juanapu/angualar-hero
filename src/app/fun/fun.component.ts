import { Component, OnInit, ViewChild } from '@angular/core';
import { TimerComponent } from '../publicCom/timer/timer.component';
import { ColorService } from '../service/color.service'; 
import { Subject,Observable } from 'rxjs';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-fun',
  animations: [
    trigger('changeColor',[
        state('clr1',style({
            'background-color': 'yellow',
            transform: 'scale(0.5)'
        })),
        state('mdClr',style({
            transform: 'scale(1.5)',
            border: '1px solid yellow'
        })),
        state('clr2',style({
            'background-color': 'red',
            transform: 'scale(1.5)'
            
        })),
        transition('clr1 <=> clr2',[
            style({
                borderRadius: '50%'
            }),
            animate(5000,style({
              borderRadius: '.5rem'
            })),
            animate(5000) 
        ]),
        // transition('clr1 <=> clr2',[
        //     animate(1000,style({
        //       borderRadius: '.5rem'
        //     }))
        //   ]),
        transition('mdClr <=> *',[
            animate(1000)
          ])
      ])
  ],
  templateUrl: './fun.component.html',
  styleUrls: ['./fun.component.scss']
})
export class FunComponent implements OnInit {

  state = 'clr1';

  @ViewChild(TimerComponent)
  timer: TimerComponent;
  color: string;

  constructor(private colorservice: ColorService) {
    this.colorservice.color.subscribe(clr=>this.color=clr);
   }

  ngOnInit() {
  }

  onStop(){
      this.timer.stop();
  }
  onCount(){
      this.timer.count();
  }
  OnChangeClr(clrState){
    this.state = this.state==='clr1'?'clr2':'clr1';
  }

}

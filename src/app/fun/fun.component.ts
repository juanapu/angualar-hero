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
            animate(1000,style({
              borderRadius: '.5rem'
            })),
            animate(1000) 
        ]),
        // transition('clr1 <=> clr2',[
        //     animate(1000,style({
        //       borderRadius: '.5rem'
        //     }))
        //   ]),
        transition('mdClr <=> *',[
            animate(1000)
          ])
      ]),
      trigger('wildCard',[
        state('open', style({
            // height: '200px',
            opacity: 1,
            backgroundColor: 'yellow'
          })),
          state('closed', style({
            // height: '100px',
            opacity: 0.5,
            backgroundColor: 'green'
          })),
          transition('* => closed', [
            animate('3s')
          ]),
          transition('* => open', [
            style({
                transform: 'scale(1)'
            }),
            animate(300,style({
                transform: 'scale(.5)'
            })), 
            animate(300,style({
                transform: 'scale(1)'
            })), 
            animate(100,style({
                transform: 'scale(1.3)'
            })), 
            animate(500)
          ]),
      ]),
      trigger('show',[
          state('in',style({
              backgroundColor: 'red'
          })),
          transition('void=>*',[
            style({
                backgroundColor: 'red',
                transform: 'scale(0)'
            }),
            animate(1000,style({
                backgroundColor: 'green',
                transform: 'scale(1.5)'
            })),
            animate(500)
          ]),
          transition('*=>void',[
            animate(1000,style({
                backgroundColor: 'green',
                transform: 'scale(0)'
            }))
          ])
      ])
  ],
  templateUrl: './fun.component.html',
  styleUrls: ['./fun.component.scss']
})
export class FunComponent implements OnInit {
  
  circles:(boolean)[] = [];
  items:number[]=[];

  state = 'clr1';
  wildCardState = 'closed';

  @ViewChild(TimerComponent)
  timer: TimerComponent;
  color: string;

  constructor(private colorservice: ColorService) {
    this.colorservice.color.subscribe(clr=>this.color=clr);
   }

  ngOnInit() {
      for(let i =0;i<16;i++){
        this.circles.push(false);
      };
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

  OnChangewildState(){
      this.wildCardState = this.wildCardState==='open'?'closed':'open';
  }

  OnShow(index){
    this.circles[index] = !this.circles[index];  
  }
  onAddItem(){
      this.items.push(this.items.length);
  }
  onDelete(index){
      this.items.splice(index,1);
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  timetxt: number = 0;
  intervl: number;

  constructor() { }

  ngOnInit() {
    this.counter();
  }

  counter(){
    this.intervl = window.setInterval(()=>{
      return this.timetxt++;
    },1000);
  }

  stop(){
    if(this.intervl){
      clearInterval(this.intervl);
      this.intervl = 0;
    }
  }

  count(){
    console.log(this.intervl);
    if(!this.intervl){
      this.counter();
    }
  }

}

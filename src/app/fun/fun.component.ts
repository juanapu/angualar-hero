import { Component, OnInit, ViewChild } from '@angular/core';
import { TimerComponent } from '../publicCom/timer/timer.component';
import { ColorService } from '../service/color.service'; 
import { Subject,Observable } from 'rxjs';

@Component({
  selector: 'app-fun',
  templateUrl: './fun.component.html',
  styleUrls: ['./fun.component.scss']
})
export class FunComponent implements OnInit {

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

}

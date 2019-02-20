import { Component, OnInit } from '@angular/core';
import {HeroMessageService } from '../service/hero-message.service';
import { Observable,Subject } from 'rxjs';

@Component({
  selector: 'app-hero-message',
  templateUrl: './hero-message.component.html',
  styleUrls: ['./hero-message.component.scss']
})
export class HeroMessageComponent implements OnInit {
  title: string = 'Messages';
  message: string[]=[];

  constructor(private heroMessageService: HeroMessageService) { }

  ngOnInit() {
    console.log('-- check --');
    console.log(this.heroMessageService.message);
    this.heroMessageService.message
      .subscribe(val=>{
        console.log(`check val: ${val}`);
        console.log(val);
        // this.message.push(val)
      });
  }

  onClear(): void{}

}

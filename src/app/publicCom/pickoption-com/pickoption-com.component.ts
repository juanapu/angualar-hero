import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-pickoption-com',
  templateUrl: './pickoption-com.component.html',
  styleUrls: ['./pickoption-com.component.scss']
})
export class PickoptionComComponent implements OnInit {

  @Input()
  option: object;

  bgclr: string;

  constructor() { }

  ngOnInit() {
  }

}

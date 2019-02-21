import { Component, OnInit } from '@angular/core';
import { ColorService } from '../../service/color.service';

@Component({
  selector: 'app-colorpicker',
  templateUrl: './colorpicker.component.html',
  styleUrls: ['./colorpicker.component.scss']
})
export class ColorpickerComponent implements OnInit {

  constructor(private colorService: ColorService) { }

  ngOnInit() {
  }

  onChangeColor(event){
    this.colorService.color.next(window.getComputedStyle(event.target).backgroundColor);
  }

  onResetColor(){
    this.colorService.resetColor();
  }

  onChangeDftClr(event){
    this.colorService.changeDefaultColor(window.getComputedStyle(event.target).backgroundColor);
  }
}

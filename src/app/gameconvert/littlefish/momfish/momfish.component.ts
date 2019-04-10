import { Component, OnInit } from '@angular/core';
import { DrawService } from '../../service/draw.service';

@Component({
  selector: 'app-momfish',
  templateUrl: './momfish.component.html',
  styleUrls: ['./momfish.component.scss']
})
export class MomfishComponent implements OnInit {

  private momfishImg = [
    ['assets/img/big.png', 100, 100, 30, 30],
    ['assets/img/bigEye0.png', 110, 110, 10, 10],
    ['assets/img/bigTail0.png', 120, 100, 30, 30],
  ];

  constructor(private drawService: DrawService) { }

  ngOnInit() {
    this.drawService.addFunction(this.drawMomfish.bind(this));
  }

  drawMomfish() {
    const ctx = this.drawService.ctx2;
    const fish = this.momfishImg;
    fish.map( ( [imgUrl, x, y, width, height]) => {
      const img = new Image();
      img.src = imgUrl + '';
      ctx.drawImage(img, x, y, width, height);
    });
  }

}

import { Component, OnInit, ElementRef } from '@angular/core';
import { DrawService } from '../../service/draw.service';
import { CommonService } from '../../service/common.service';
import { Point } from '../../model/common.model';
@Component({
  selector: 'app-momfish',
  templateUrl: './momfish.component.html',
  styleUrls: ['./momfish.component.scss']
})
export class MomfishComponent implements OnInit {

  private momfishImg = [
    ['assets/img/big.png', 30, 30, 'head'],
    ['assets/img/bigEye0.png', 10, 10, 'eye'],
    ['assets/img/bigTail0.png', 30, 30, 'tail'],
  ];

  mouseCoordinate: Point = {x: 0, y: 0};
  aim = {
    x: 100,
    y: 100,
  };
  cur = {
    x: 100,
    y: 100,
  };

  // angle for fish
  angle = 0;
 // Math.atan2(y, x); angle between fish and coordinate

  constructor(
    private drawService: DrawService,
    private commonService: CommonService,
  ) {
    this.commonService.mouseCoordinate.subscribe( (cor: MouseEvent) => {
      this.mouseCoordinate.x = cor.clientX;
      this.mouseCoordinate.y = cor.clientY;
      this.aim.x = cor.layerX;
      this.aim.y = cor.layerY;
    });
  }

  ngOnInit() {
    this.drawService.addFunction(this.drawMomfish.bind(this));
  }

  drawMomfish() {
    const ctx = this.drawService.ctx2;
    const fish = this.momfishImg;
    // delta: fish position - cooridinate position
    const deltaY = this.mouseCoordinate.y - this.cur.y;
    const deltaX = this.mouseCoordinate.x - this.cur.x;
    const delta = Math.atan2(deltaY, deltaX) + Math.PI;  // -PI - PI
    this.angle = this.commonService.lerpAngle(delta, this.angle, 0.8);

    fish.map( ( [imgUrl, width, height, part]) => {
      let x = 0;
      let y = 0;
      if (part === 'eye') {
        x = 10;
        y = 10;
      }
      if (part === 'tail') {
        x = 20;
      }
      const img = new Image();
      img.src = imgUrl + '';
      this.cur.x = this.commonService.lerpDistance(this.aim.x, this.cur.x, 0.98 );
      this.cur.y = this.commonService.lerpDistance(this.aim.y, this.cur.y, 0.98 );
      ctx.save();
      ctx.translate(this.cur.x, this.cur.y);
      ctx.rotate(this.angle);
      ctx.drawImage(img, x, y, width, height);
      ctx.restore();
    });
  }

}

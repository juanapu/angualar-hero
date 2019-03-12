import { Component, OnInit } from '@angular/core';
import { Fruit } from '../../model/fruit.model';
import { DrawService } from '../../service/draw.service';

@Component({
	selector: 'app-fruit',
	templateUrl: './fruit.component.html',
	styleUrls: ['./fruit.component.css']
})
export class FruitComponent implements OnInit {

	private num = 30;
	private fruit: Fruit = {
		num: this.num,
		fruit: Array.from({ length: this.num })
	};
	private maxWid = 10;
	private fruitImg = '/assets/img/fruit.png';
	private diePoint = -24; // define when to die
	constructor(private drawService: DrawService) { }

	ngOnInit() {
		this.born();
		this.drawService.addFunction(this.drawFruit.bind(this));
	}

	// born, grow, fly

	born() {
		const aneArr = this.drawService.aneArr;

		this.fruit.fruit = this.fruit.fruit.map((item, index) => {
			const bornAneId = Math.floor((Math.random() * aneArr.length) + 0);
			const bornAne = this.drawService.aneArr[bornAneId];

			const fruit = {
				id: index,
				position: {
					x: bornAne.end.x,
					y: bornAne.end.y,
				},
				size: {
					wid: 0,
					ht: 0,
				},
				status: 'born',
				flySpeed: Math.random() * 2 + 0.01,
			};

			return fruit;

		});

	}

	reborn(bornAneId: number) {
		return this.drawService.aneArr[bornAneId].end.y;
	}

	drawFruit() {
		const ctx = this.drawService.ctx2;
		const img = new Image();
		img.src = this.fruitImg;
		const deltaTime = this.drawService.deltaTime / 100000;

		this.fruit.fruit = this.fruit.fruit.map((item, index) => {
			// born a fruit
			let { wid, ht } = item.size;
			const deltaval = deltaTime * (Math.random() * 2000 + 1);
			if ((wid <= this.maxWid) && (item.status === 'born')) {
				// console.log(`--wid ${wid}`);
				wid = wid + deltaval;
				ht = ht + deltaval;
				// console.log(`wid --- ${wid}`);
			} else if (item.position.y < this.diePoint) {
				item.status = 'die';
				item.position.y = this.reborn(index);
			} else {
				item.position.y -= item.flySpeed;
				item.status = 'fly';
			};
			ctx.drawImage(img, item.position.x - wid * 0.5, item.position.y - ht * 0.5, wid, ht);
			return {
				...item,
				position: {
					...item.position,
					y: item.position.y
				},
				size: {
					wid: wid,
					ht: ht,
				}
			}
		});
	}

}

export interface Fruit {
	num: number;
	fruit: Array<SingleFruit>;
}

export interface SingleFruit {
	id: number;
	position: Point;
	size: Size;
	status: string; // 'born','die','fly'
	flySpeed: number;
}

interface Point {
	x: number;
	y: number;
}

interface Size {
	wid: number;
	ht: number;
}
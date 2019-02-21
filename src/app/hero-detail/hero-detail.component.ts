import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../class/hero';
import { ActivatedRoute } from '@angular/router';

import { HeroService } from '../service/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero={
    id: 0,
    name: '',
    img: ''
  };
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService
  ) { }

  ngOnInit() {
   const id:number = parseInt(<string>this.route.snapshot.paramMap.get('id'))
   this.heroService.getHero(id)
    .subscribe(val=>{
      this.hero = val;
      console.log(this.hero);
    })
  }

  onSave(){
    this.heroService.update(this.hero)
      .subscribe(val=>console.log(val))
  }

}

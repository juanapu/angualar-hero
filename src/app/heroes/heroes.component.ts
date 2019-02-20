import { Component, OnInit } from '@angular/core';

import { Hero } from '../class/hero';
import { HeroService } from '../service/hero.service';
import { HtmlParser } from '@angular/compiler';
// import { ButtonComponent } from '../publicCom/button/button.component';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  trackByHeroes(index: number, hero: Hero): number { return hero.id; };

   hero: Hero = {
   	 id: 1,
   	 name: 'windostorm'
   };

   option: Object = {
    value: 'happy'
   }

   clickedBtn: boolean = false;

   twowaybinding: string = 'twowaybinding';
   twowaybindingChild: string = 'twowaybindingChild';
   onewaybinding: string = 'onewaybinding simulates twowaybinding';
   onewaybindChild: string = 'one way bind child';

   heroes: Hero[];
   selectedHero: Hero;
   innerHtml: string = '<div class="text-danger">insert innerHTML by property binding [innerHTML] =&quot;value&quot;</div>';

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroService.getHeroes()
      .subscribe(val=>{ 
        this.heroes=val;
        console.log(this.heroes);
      });
  }

  onSelect(slc: Hero){
    this.selectedHero=slc;
  }
  onGetbtnevent(event){
    if(event){
      this.clickedBtn = !this.clickedBtn;
    }
  }
  changeOnewaybindChild(val){
    this.onewaybindChild = val;
  }

}

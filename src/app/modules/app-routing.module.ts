import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { HeroesComponent } from '../heroes/heroes.component';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { FunComponent } from '../fun/fun.component';
import { ExperienceComponent } from '../experience/experience.component';
import { MaterialComponent } from '../material/material.component';
import { ScrollpgComponent } from '../scrollpg/scrollpg.component';
import { GameconvertComponent } from '../gameconvert/gameconvert.component';

const routes: Routes = [
    { path: '', redirectTo: '/material', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'detail/:id', component: HeroDetailComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'fun', component: FunComponent },
    { path: 'material', component: MaterialComponent },
    { path: 'experience', component: ExperienceComponent },
    { path: 'scroll', component: ScrollpgComponent },
    { path: 'gameconvert', component: GameconvertComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
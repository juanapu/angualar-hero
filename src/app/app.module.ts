import { BrowserModule } from '@angular/platform-browser';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './service/in-memory-data.service';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroMessageComponent } from './hero-message/hero-message.component';

import { AppRoutingModule } from './modules/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ButtonComponent } from './publicCom/button/button.component';
import { ChildComponent } from './heroes/child/child.component';
import { TwowaybindchildComponent } from './heroes/twowaybindchild/twowaybindchild.component';
import { PickoptionComComponent } from './publicCom/pickoption-com/pickoption-com.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    HeroMessageComponent,
    DashboardComponent,
    ButtonComponent,
    ChildComponent,
    TwowaybindchildComponent,
    PickoptionComComponent
  ],
  imports: [
    BrowserModule,
    // platformBrowserDynamic,
    FormsModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
        // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
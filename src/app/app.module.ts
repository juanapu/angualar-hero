import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './service/in-memory-data.service';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroMessageComponent } from './hero-message/hero-message.component';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppMaterialModule } from './modules/app-material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ButtonComponent } from './publicCom/button/button.component';
import { ChildComponent } from './heroes/child/child.component';
import { TwowaybindchildComponent } from './heroes/twowaybindchild/twowaybindchild.component';
import { PickoptionComComponent } from './publicCom/pickoption-com/pickoption-com.component';
import { TimerComponent } from './publicCom/timer/timer.component';
import { FunComponent } from './fun/fun.component';
import { ColorpickerComponent } from './publicCom/colorpicker/colorpicker.component';

import { LittlefishComponent } from './gameconvert/littlefish/littlefish.component';

import { DrawService } from './gameconvert/service/draw.service';
import { AneComponent } from './gameconvert/littlefish/ane/ane.component';
import { SingleaneComponent } from './gameconvert/littlefish/ane/singleane/singleane.component';
import { FruitComponent } from './gameconvert/littlefish/fruit/fruit.component';

// import { XpGhostModule } from '@hyland/experience';
import { TranslateModule } from '@ngx-translate/core';
import { XpTranslateModule } from '@hyland/experience';

import { ThumbnailModule } from './thumbnailsandbox/thumbnail.module';

import { XpViewerModule } from '@hyland/experience';
import { ExperienceComponent } from './experience/experience.component';
import { MaterialComponent } from './material/material.component';
import { MaterialFormComponent } from './publicCom/material-form/material-form.component';
import { MatInputModule, MatButtonModule, MatSelectModule, MatRadioModule, MatCardModule } from '@angular/material';
import { ScrollComponent } from './publicCom/scroll/scroll.component';
import { CustomScrollComponent } from './publicCom/custom-scroll/custom-scroll.component';
import { ScrollpgComponent } from './scrollpg/scrollpg.component';

import { highlightDirective } from './directives/hightlight.directives';
import { GameconvertComponent } from './gameconvert/gameconvert.component';
import { ThumbnailsandboxComponent } from './thumbnailsandbox/thumbnailsandbox.component';
import { ThumbnailComponent } from './thumbnailsandbox/thumbnail/thumbnail.component';
import { MomfishComponent } from './gameconvert/littlefish/momfish/momfish.component';


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
    PickoptionComComponent,
    FunComponent,
    TimerComponent,
    ColorpickerComponent,
    ExperienceComponent,
    MaterialComponent,
    MaterialFormComponent,
    ScrollComponent,
    CustomScrollComponent,
    ScrollpgComponent,
    highlightDirective,
    GameconvertComponent,
    LittlefishComponent,
    AneComponent,
    SingleaneComponent,
    FruitComponent,
    MomfishComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // platformBrowserDynamic,
    FormsModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    XpViewerModule,
    TranslateModule,
    AppMaterialModule,
    ThumbnailModule,
    XpTranslateModule.forRoot(),
    // XpGhostModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ), MatInputModule, MatButtonModule, MatSelectModule, MatRadioModule, MatCardModule, ReactiveFormsModule
  ],
  providers: [DrawService],
  bootstrap: [AppComponent]
})
export class AppModule { }
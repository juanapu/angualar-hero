import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule,  } from '@angular/material';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { ThumbnailsandboxComponent } from './thumbnailsandbox.component';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';

const routes: Routes = [
  { path: 'thumbnailsandbox', component: ThumbnailsandboxComponent },
];

@NgModule({
  declarations: [
    ThumbnailsandboxComponent,
    ThumbnailComponent
  ],
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    ScrollingModule,
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes),
   ],
  providers: [],
  bootstrap: [],
  exports: [
    RouterModule,
    MatButtonModule,
    MatCheckboxModule,
    ScrollingModule,
  ],
})
export class ThumbnailModule { }

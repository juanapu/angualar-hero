import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule,  } from '@angular/material';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule,ScrollingModule],
    exports: [MatButtonModule, MatCheckboxModule, ScrollingModule]
  })
  export class AppMaterialModule {}
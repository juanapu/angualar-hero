import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { PageData } from './thumbnail/tbnl-model';

@Component({
  selector: 'app-thumbnailsandbox',
  templateUrl: './thumbnailsandbox.component.html',
  styleUrls: ['./thumbnailsandbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThumbnailsandboxComponent implements OnInit {

  items = Array.from({length: 100}).map((_, i) => `Item #${i}`);

  readonly _data: PageData[];

  constructor() {
    this._data = this.items.map((item, index) => {
      return {
        id: index,
        meta: { des: item },
        content: item,
      };
    });
  }

  ngOnInit() {
  }

}

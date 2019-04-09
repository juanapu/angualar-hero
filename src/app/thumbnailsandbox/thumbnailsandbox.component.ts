import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thumbnailsandbox',
  templateUrl: './thumbnailsandbox.component.html',
  styleUrls: ['./thumbnailsandbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThumbnailsandboxComponent implements OnInit {

  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);

  constructor() { }

  ngOnInit() {
  }

}

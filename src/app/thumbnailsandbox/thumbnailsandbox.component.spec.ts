import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbnailsandboxComponent } from './thumbnailsandbox.component';

describe('ThumbnailsandboxComponent', () => {
  let component: ThumbnailsandboxComponent;
  let fixture: ComponentFixture<ThumbnailsandboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThumbnailsandboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThumbnailsandboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

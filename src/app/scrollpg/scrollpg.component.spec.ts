import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollpgComponent } from './scrollpg.component';

describe('ScrollpgComponent', () => {
  let component: ScrollpgComponent;
  let fixture: ComponentFixture<ScrollpgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollpgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollpgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

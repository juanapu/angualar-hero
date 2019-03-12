import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwowaybindchildComponent } from './twowaybindchild.component';

describe('TwowaybindchildComponent', () => {
  let component: TwowaybindchildComponent;
  let fixture: ComponentFixture<TwowaybindchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwowaybindchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwowaybindchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});

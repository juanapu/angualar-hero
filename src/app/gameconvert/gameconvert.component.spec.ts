import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameconvertComponent } from './gameconvert.component';

describe('GameconvertComponent', () => {
  let component: GameconvertComponent;
  let fixture: ComponentFixture<GameconvertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GameconvertComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameconvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});

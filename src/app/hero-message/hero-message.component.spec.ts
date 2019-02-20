import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroMessageComponent } from './hero-message.component';

describe('HeroMessageComponent', () => {
  let component: HeroMessageComponent;
  let fixture: ComponentFixture<HeroMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

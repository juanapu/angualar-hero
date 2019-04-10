import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MomfishComponent } from './momfish.component';

describe('MomfishComponent', () => {
  let component: MomfishComponent;
  let fixture: ComponentFixture<MomfishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MomfishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MomfishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

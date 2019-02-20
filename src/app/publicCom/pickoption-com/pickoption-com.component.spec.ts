import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickoptionComComponent } from './pickoption-com.component';

describe('PickoptionComComponent', () => {
  let component: PickoptionComComponent;
  let fixture: ComponentFixture<PickoptionComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickoptionComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickoptionComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TonnyComponent } from './tonny.component';

describe('TonnyComponent', () => {
  let component: TonnyComponent;
  let fixture: ComponentFixture<TonnyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TonnyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TonnyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

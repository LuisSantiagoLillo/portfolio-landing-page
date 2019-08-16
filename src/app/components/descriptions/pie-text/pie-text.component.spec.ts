import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PieTextComponent } from './pie-text.component';

describe('PieTextComponent', () => {
  let component: PieTextComponent;
  let fixture: ComponentFixture<PieTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PieTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PieTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

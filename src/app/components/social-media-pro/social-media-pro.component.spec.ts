import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaProComponent } from './social-media-pro.component';

describe('SocialMediaProComponent', () => {
  let component: SocialMediaProComponent;
  let fixture: ComponentFixture<SocialMediaProComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialMediaProComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialMediaProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

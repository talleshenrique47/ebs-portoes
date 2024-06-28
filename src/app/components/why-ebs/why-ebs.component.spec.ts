import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyEbsComponent } from './why-ebs.component';

describe('WhyEbsComponent', () => {
  let component: WhyEbsComponent;
  let fixture: ComponentFixture<WhyEbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WhyEbsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhyEbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

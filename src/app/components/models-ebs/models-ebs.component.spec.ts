import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelsEbsComponent } from './models-ebs.component';

describe('ModelsEbsComponent', () => {
  let component: ModelsEbsComponent;
  let fixture: ComponentFixture<ModelsEbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModelsEbsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModelsEbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderProgramacionComponent } from './slider-programacion.component';

describe('SliderProgramacionComponent', () => {
  let component: SliderProgramacionComponent;
  let fixture: ComponentFixture<SliderProgramacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderProgramacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SliderProgramacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

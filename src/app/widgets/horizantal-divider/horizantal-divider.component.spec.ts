import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizantalDividerComponent } from './horizantal-divider.component';

describe('HorizantalDividerComponent', () => {
  let component: HorizantalDividerComponent;
  let fixture: ComponentFixture<HorizantalDividerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HorizantalDividerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HorizantalDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

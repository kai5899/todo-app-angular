import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderRowComponent } from './header-row.component';

describe('HeaderRowComponent', () => {
  let component: HeaderRowComponent;
  let fixture: ComponentFixture<HeaderRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderRowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

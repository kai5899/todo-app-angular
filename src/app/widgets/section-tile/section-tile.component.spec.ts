import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTileComponent } from './section-tile.component';

describe('SectionTileComponent', () => {
  let component: SectionTileComponent;
  let fixture: ComponentFixture<SectionTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionTileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectionTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

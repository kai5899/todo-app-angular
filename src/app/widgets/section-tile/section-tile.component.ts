import { Component, Input } from '@angular/core';
import { CatFilter } from '../../shared/models/cat-filter';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-tile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-tile.component.html',
  styleUrl: './section-tile.component.css'
})
export class SectionTileComponent {

  @Input() title : String = "deflt title";

  @Input() icon : String = "cloud";

  @Input() children! : CatFilter[] ;


  isSelected(title:String) :boolean{
    return title === "Today Tasks";
  }

}

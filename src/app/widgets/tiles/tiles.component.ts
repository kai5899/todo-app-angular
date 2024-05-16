import { Component } from '@angular/core';
import { SectionTileComponent } from '../section-tile/section-tile.component';
import { Tile } from '../../shared/models/tile';
import { CatFilter } from '../../shared/models/cat-filter';

@Component({
  selector: 'app-tiles',
  standalone: true,
  imports: [SectionTileComponent],
  templateUrl: './tiles.component.html',
  styleUrl: './tiles.component.css',
})
export class TilesComponent {
  sections: Tile[] = [
    {
      title: 'Today Tasks',
      icon: 'date_range',
      children: [
        {
          title:'Personal',
          color:'#FD99AF',
        },
        {
          title:'Freelance',
          color:'#3FD4F4',
        }
        ,{
          title:'Work',
          color:'#FAC608',
        }
      ],
    },
    {
      title: 'Scheduled Tasks',
      icon: 'schedule',
      children: [],
    },
    {
      title: 'Settings',
      icon: 'settings',
      children: [],
    },
  ];
}

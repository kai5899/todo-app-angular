import { Component } from '@angular/core';
import { HeaderRowComponent } from '../widgets/header-row/header-row.component';
import { HorizantalDividerComponent } from '../widgets/horizantal-divider/horizantal-divider.component';
import { TilesComponent } from '../widgets/tiles/tiles.component';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [HeaderRowComponent,HorizantalDividerComponent,TilesComponent],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {

}

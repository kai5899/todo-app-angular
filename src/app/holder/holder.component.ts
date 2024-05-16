import { Component } from '@angular/core';
import { SideMenuComponent } from '../side-menu/side-menu.component';
import { HomeComponent } from '../home/home.component';
import { TaskWidgetComponent } from '../widgets/task-widget/task-widget.component';

@Component({
  selector: 'app-holder',
  standalone: true,
  imports: [SideMenuComponent,HomeComponent,TaskWidgetComponent],
  templateUrl: './holder.component.html',
  styleUrl: './holder.component.css'
})
export class HolderComponent {

}

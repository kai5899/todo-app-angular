import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HolderComponent } from './holder/holder.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HolderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project0';
}

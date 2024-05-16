import { Component, Input } from '@angular/core';
import { Tasky } from '../../shared/models/tasky';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-widget.component.html',
  styleUrl: './task-widget.component.css'
})
export class TaskWidgetComponent {
  @Input() task!: Tasky ;


  toggleChecked(){
    this.task.checked = !this.task.checked;
  }
}

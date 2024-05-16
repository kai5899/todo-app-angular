import { Component } from '@angular/core';
import { Tasky } from '../shared/models/tasky';
import { TaskWidgetComponent } from '../widgets/task-widget/task-widget.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TaskWidgetComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {



  tasks : Tasky[] = [

    {
      title:"Go to the gym",
      checked:true,
      color:"#FD99AF",
      time:"8 : 00 am"
    },
    {
      title:"Design Team Meeting",
      checked:false,
      color:"#3FD4F4",
      time:"12 : 00 am"
    }
    ,
    {
      title:"Read 5 pages of the new book",
      checked:false,
      color:"#FAC608",
      time:"9 : 00 pm"
    }
  ];

}

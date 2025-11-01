import { Component, Input } from '@angular/core';
import { TaskComponent } from '../task-component/task';
import { Task } from '../../models/task.model';

@Component({
  selector: 'task-column',
  imports: [TaskComponent],
  templateUrl: './task-column.html',
  styleUrl: './task-column.css',
})
export class TaskColumn {

  @Input()
  public tasks!: Task[]

}

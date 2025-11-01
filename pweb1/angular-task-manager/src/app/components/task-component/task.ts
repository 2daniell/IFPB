import { Component, inject, Inject, Input } from '@angular/core';
import { Task } from '../../models/task.model';
import { TaskModalService } from '../../services/task-modal-service';

@Component({
  selector: 'task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class TaskComponent {

  @Input() 
  public task!: Task

  public modalService = inject(TaskModalService);

  public editTask() {
    this.modalService.open(this.task);
  }

}

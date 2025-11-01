import { Component, inject, computed } from '@angular/core';
import { TaskColumn } from '../task-column/task-column';
import { TaskService } from '../../services/task-service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'task-container',
  imports: [TaskColumn],
  templateUrl: './task-container.html',
  styleUrl: './task-container.css',
})
export class TaskContainer {
  private taskService = inject(TaskService);

  public tasks = this.taskService.tasks;

  public getTasksByStatus(status: Task['status']) {
    return this.taskService.getTasksByStatus(status);
  }
}

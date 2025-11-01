import { Component, inject } from '@angular/core';
import { TaskModalService } from '../../services/task-modal-service';
import { FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms"
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task-service';

@Component({
  selector: 'task-modal',
  imports: [ReactiveFormsModule],
  templateUrl: './task-modal.html',
  styleUrl: './task-modal.css',
})
export class TaskModal {
  protected modalService = inject(TaskModalService);
  private formBuilder = inject(FormBuilder);
  private taskService = inject(TaskService);

  public taskForm = this.formBuilder.nonNullable.group({
    title: [this.modalService.currentTask()?.title ?? "", Validators.required],
    level: [this.modalService.currentTask()?.level ?? "low"],
    description: [this.modalService.currentTask()?.description ?? ""],
    endsAt: [this.modalService.currentTask()?.endsAt ?? ""]
  });

  public saveTask() {
    const taskData = this.taskForm.getRawValue();

    const currentTask = this.modalService.currentTask(); 

    if (currentTask) {
      const updatedTask: Task = { ...currentTask, ...taskData };
      this.taskService.updateTask(updatedTask);
    } else {
      const newTask: Task = { ...taskData, id: Date.now(), status: 'todo' };
      this.taskService.addTask(newTask);
    }

    
    this.modalService.close();
  }
}

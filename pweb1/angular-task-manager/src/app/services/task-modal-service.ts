import { Injectable, signal } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskModalService {

  public isOpen = signal<boolean>(false);
  public currentTask = signal<Task | null>(null);
  
  public open(task?: Task) {
    this.currentTask.set(task ?? null);
    this.isOpen.set(true);
  }

  public close() {
    this.isOpen.set(false);
    this.currentTask.set(null);
  }

}

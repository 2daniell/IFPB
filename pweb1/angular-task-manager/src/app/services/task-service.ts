import { Injectable, signal } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private tasksSignal = signal<Task[]>([
    { id: 1, title: "Ler capitulo 3 de Algoritmos", endsAt: "2025-11-03", description: "Priorizar exercicios 3.1-3.5", level: "high", status: "todo" },
    { id: 2, title: "Resolver lista de TS", endsAt: "2025-11-06", description: "Atencao a generics", level: "medium", status: "in-progress"},
    { id: 3, title: "Revisao rapida: HTML/CSS", endsAt: "2025-11-11", description: "30 minutos", level: "low", status: "done" },
  ]);

  tasks = this.tasksSignal.asReadonly();

  updateTask(updatedTask: Task) {
    this.tasksSignal.update(tasks =>
      tasks.map(t => t.id === updatedTask.id ? updatedTask : t)
    );
  }

  addTask(task: Task) {
    this.tasksSignal.update(tasks => [...tasks, task]);
  }

  getTasksByStatus(status: Task['status']) {
    return this.tasks().filter(t => t.status === status);
  }
}

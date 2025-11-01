import { Component, inject } from '@angular/core';
import { TaskModal } from './components/task-modal/task-modal';
import { TaskContainer } from './components/task-container/task-container';
import { TaskModalService } from './services/task-modal-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [TaskModal, TaskContainer],
  styleUrl: './app.css'
})
export class App { 

  protected modalService = inject(TaskModalService);

}

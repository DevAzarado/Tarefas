import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from 'src/app/model/task.model';
import { TaskService } from 'src/app/services/task.service';



@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html'
})
export class TaskInputComponent {
  input: string = '';
  // TODO 1º e 2º
  //@Output() taskAdded = new EventEmitter<void>();

  constructor(private taskService: TaskService) { }

  addTask(): void {
    if (this.input.trim()) {
      const newTask = new Task(Math.random() * 10000, this.input);
      this.taskService.addTask(newTask);
      this.input = '';
      // this.taskAdded.emit(); 
    }
  }
}


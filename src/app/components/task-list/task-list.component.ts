import { Component, EventEmitter, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Task } from 'src/app/model/task.model';
import { TaskService } from 'src/app/services/task.service';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html'
})
export class TaskListComponent implements OnInit {

  todos: Task[] = [];
  //1º exemplo.
  // @Input() refresh: boolean = false;

  //2º exemplo.
  // @Input() refresh?: EventEmitter<void>;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  
    this.todos = this.taskService.getTasks();

    //2º exemplo.
    // this.refresh?.subscribe(() => {
    //   this.refreshList();
    // });

    this.taskService.todos$.subscribe((todos) => {
      this.todos = todos;
    });
  }

  //   //2º exemplo.
  // refreshList(): void {
  //   this.todos = this.taskService.getTasks();
  // }



  toggleComplete(task: Task): void {
    task.completed = !task.completed;
    this.taskService.updateTasks(this.todos);
  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id);
    this.todos = this.taskService.getTasks();
  }

  //1º exemplo.
  // ngOnChanges(changes: SimpleChanges): void {
  //   if (changes['refresh']) {
  //     this.todos = this.taskService.getTasks();
  //   }
  // }



}

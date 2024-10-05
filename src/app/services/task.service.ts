import { Injectable } from '@angular/core';
import { Task } from '../model/task.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  //TODO: 3 Exemplo
  // BehaviorSubject para armazenar as tarefas e emitir mudanças. 
  // O BS permite que o componente se inscreva para receber as mudanças automaticamente.

  // private todosSubject = new BehaviorSubject<any[]>([]);
  // todos$ = this.todosSubject.asObservable();

  private localStorageKey = 'taskUser';

  getTasks(): Task[] {
    const tasks = localStorage.getItem(this.localStorageKey);
    // JSON.parse converter uma string no formato JSON em um objeto JavaScript
    return tasks ? JSON.parse(tasks) : [];
  }

  private saveTasks(tasks: Task[]): void {
    //convertendo um objeto JavaScript para string
    localStorage.setItem(this.localStorageKey, JSON.stringify(tasks));
  }

  addTask(task: Task): void {
    const tasks = this.getTasks();
    tasks.push(task);
    this.saveTasks(tasks);
    //TODO: 3 Exemplo
    //this.todosSubject.next(this.getTasks());

  }

  deleteTask(id: number): void {
    const tasks = this.getTasks().filter(task => task.id !== id);
    this.saveTasks(tasks);
  }

  updateTasks(tasks: Task[]): void {
    this.saveTasks(tasks);
  }


}

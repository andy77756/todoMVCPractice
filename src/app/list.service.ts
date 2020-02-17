import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from './Task';

@Injectable({
  providedIn: 'root'
})
export class ListService {


  constructor(public http: HttpClient) {
   }

  run() {
      console.log('test');
  }

  getData() {
    return this.http.get('http://localhost:3000/tasks/');
  }

  postData(newTitle: string) {
    return this.http.post<Task>('http://localhost:3000/tasks/', {title: newTitle , isDone: false});
  }

  putData(id: number, task: Task) {
    return this.http.put<Task>('http://localhost:3000/tasks/' + id, task);
  }

  deleteData(id: number) {
    return this.http.delete('http://localhost:3000/tasks/' + id);
  }
}

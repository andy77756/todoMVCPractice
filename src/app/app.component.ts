import { Component, OnInit } from '@angular/core';
import { ListService } from './list.service';
import { Task } from './Task';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'doggy-training-test';

  task: Task[] = [];
  allCount = 0;
  notIsDonecount = 0;
  isDoneCount = 0;
  allIsDone = false;

  constructor(public datasrv: ListService) {

  }

  ngOnInit() {
      this.getNewData();
  }

  doPostData(newTitle: string) {
    this.datasrv.postData(newTitle).subscribe(result => {
      this.getNewData();
    });
  }

  getNewData() {
    this.datasrv.getData().subscribe((result: Task[]) => {
      this.task = result;
      this.allCount = result.length;
      this.notIsDonecount = result.filter( v => {
        return v.isDone === false;
      }).length;
      this.isDoneCount = result.length - this.notIsDonecount;
      if (this.notIsDonecount === 0) {
        this.allIsDone = true;
      } else {
        this.allIsDone = false;
      }
    });
  }

  doChangeStatus(item: Task) {
    console.log(item);
    this.datasrv.putData(item.id, item).subscribe(result => {
      this.getNewData();
    });
  }
  doRemoveItem(id) {
    this.datasrv.deleteData(id).subscribe( r => {
      this.getNewData();
    });
  }
  doClearAllComplete() {
    this.task.filter( v => {
      return v.isDone === true;
    }).forEach( result => {
      this.datasrv.deleteData(result.id).subscribe(r => {
        this.getNewData();
        console.error();

      });
    });
  }
}

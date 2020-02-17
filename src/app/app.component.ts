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
  count = 0;

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
      this.count = result.filter( v => {
        return v.isDone === false;
      }).length;
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

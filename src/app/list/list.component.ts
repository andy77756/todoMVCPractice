import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../Task';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input()
  item: Task;

  @Output()
  ChangeStatus = new EventEmitter();

  id;
  constructor() { }

  ngOnInit() {
  }

  handleChecked(event: MouseEvent) {
    //console.log(this.item);

    this.ChangeStatus.emit({id: this.item.id, title: this.item.title, isDone: !event['checked']});
  }

}

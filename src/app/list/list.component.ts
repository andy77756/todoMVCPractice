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

  @Output()
  titleChanged = new EventEmitter();

  @Output()
  itemRemove = new EventEmitter();

  id;
  newtitle;
  isEdit;
  constructor() { }

  ngOnInit() {
    this.newtitle = this.item.title;
    this.isEdit = false;
  }

  handleChecked(event: MouseEvent) {
    //console.log(this.item);

    this.ChangeStatus.emit({id: this.item.id, title: this.item.title, isDone: !event['checked']});
  }

  doEditTitle(ntitle) {

    this.newtitle = ntitle;
    this.titleChanged.emit({id: this.item.id, title: ntitle, isDone: this.item.isDone});
  }

  doRemove(id) {
    this.itemRemove.emit(id);
  }

}

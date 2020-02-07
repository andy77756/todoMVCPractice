import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../Task';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input()
  count = 0;
  taskList: Task[] = [];

  @Output()
  clearComplete = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleClear() {
    this.clearComplete.emit();
  }

}

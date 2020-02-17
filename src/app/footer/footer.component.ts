import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../Task';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input()
  notIsDonecount ;
  @Input()
  isDoneCount;
  @Input()
  allCount;

  @Output()
  clearComplete = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleClear() {
    console.log(this.notIsDonecount);
    this.clearComplete.emit();
  }

}

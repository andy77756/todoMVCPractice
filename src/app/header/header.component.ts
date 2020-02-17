import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ListService } from '../list.service';
import { Task } from '../Task';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

value = '';

@Input()
allIsDone = false;

@Output()
postTitle = new EventEmitter();
doReverseIsDone = new EventEmitter();


  constructor(public datasrv: ListService) { }

  ngOnInit() {

  }

  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
        this.postTitle.emit(this.value);
        this.value = '';
    }
  }

  reverseIsDone() {
    console.log('test');
    this.doReverseIsDone.emit();
  }

}

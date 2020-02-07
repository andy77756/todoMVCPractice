import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ListService } from '../list.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

value = '';

@Output()
postTitle = new EventEmitter();

  constructor(public datasrv: ListService) { }

  ngOnInit() {

  }

  handleKeyDown(event: KeyboardEvent) {
    console.log(event);
    if (event.key === 'Enter') {
        this.postTitle.emit(this.value);
        this.value = '';
    }
  }

}

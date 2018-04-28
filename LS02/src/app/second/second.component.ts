import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent {

  @Input() public property: string;
  @Output() public myEvent = new EventEmitter();

  public childVariable: string;

  public childButtonClick() {
    this.myEvent.emit(this.childVariable);
  }

  constructor() { }


}

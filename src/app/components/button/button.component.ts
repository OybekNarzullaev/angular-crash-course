import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() text = '';
  @Output() btnClick = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onClick() {
    console.log('onClick() button');
    this.btnClick.emit();
  }
}

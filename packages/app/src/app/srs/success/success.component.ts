import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-srs-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss'],
})
export class SuccessComponent implements OnInit {
  @Output() oneMoreRound = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}

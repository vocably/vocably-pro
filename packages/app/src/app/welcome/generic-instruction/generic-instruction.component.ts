import { Component, Input, OnInit } from '@angular/core';
import { GoogleLanguage } from '@vocably/model';

@Component({
  selector: 'app-generic-instruction',
  templateUrl: './generic-instruction.component.html',
  styleUrls: ['./generic-instruction.component.scss'],
})
export class GenericInstructionComponent implements OnInit {
  @Input() language!: GoogleLanguage;

  constructor() {}

  ngOnInit(): void {}
}

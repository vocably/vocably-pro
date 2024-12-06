import { Component, Input, OnInit } from '@angular/core';
import { TagItem } from '@vocably/model';

@Component({
  selector: 'app-tags-selector',
  templateUrl: './tags-selector.component.html',
  styleUrls: ['./tags-selector.component.scss'],
})
export class TagsSelectorComponent implements OnInit {
  @Input() tags: TagItem[] = [];

  constructor() {}

  ngOnInit(): void {}
}

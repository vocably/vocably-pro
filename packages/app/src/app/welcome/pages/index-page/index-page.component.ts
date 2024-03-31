import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GoogleLanguage } from '@vocably/model';
import { sortedTargetLanguages } from '../../../sorted-languages';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.scss'],
})
export class IndexPageComponent implements OnInit {
  languages = sortedTargetLanguages;
  showTop = 6;
  expanded = false;
  selected: GoogleLanguage | null = null;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {}

  onClick(value: GoogleLanguage) {
    this.selected = value;
    this.router
      .navigate([`./${value}`], { relativeTo: this.activatedRoute })
      .then();
  }
}

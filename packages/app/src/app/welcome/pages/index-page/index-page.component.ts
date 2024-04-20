import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { GoogleLanguage, sortedTargetLanguages } from '@vocably/model';
import { HowToMultilangComponent } from '../../how-to-multilang/how-to-multilang.component';

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

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  onClick(value: GoogleLanguage) {
    this.selected = value;
    this.router
      .navigate([`./${value}`], { relativeTo: this.activatedRoute })
      .then();
  }

  showHowToMultilang() {
    this.dialog.open(HowToMultilangComponent);
  }
}

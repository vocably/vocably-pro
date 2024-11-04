import { Component, OnInit } from '@angular/core';
import posthog from 'posthog-js';

@Component({
  selector: 'app-how-to-video',
  templateUrl: './how-to-video.component.html',
  styleUrls: ['./how-to-video.component.scss'],
})
export class HowToVideoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onPlay() {
    posthog.capture('play_video');
  }
}

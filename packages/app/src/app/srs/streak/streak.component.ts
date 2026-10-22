import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { TranslocoModule } from '@jsverse/transloco';
import { getStreakDays, StreakDay } from '@vocably/sulna';

const BADGE_SIZE = 148;
const PARTICLE_COUNT = 14;
const PARTICLE_COLORS = [
  'var(--primary-color)',
  'var(--streak-flame-color)',
  'var(--streak-primary-variant)',
  'var(--streak-flame-color-dark)',
];

type Particle = {
  width: number;
  height: number;
  color: string;
  x: number;
  y: number;
  rotate: number;
};

@Component({
  selector: 'app-srs-streak',
  standalone: true,
  imports: [CommonModule, TranslocoModule, MatIcon],
  templateUrl: './streak.component.html',
  styleUrl: './streak.component.scss',
})
export class StreakComponent implements OnInit {
  @Input() consecutiveDays: number = 0;
  @Input() hasBeenShown: boolean = false;

  days: StreakDay[] = [];

  readonly particles: Particle[] = Array.from({ length: PARTICLE_COUNT }).map(
    (_, i) => {
      const angle = (i / PARTICLE_COUNT) * Math.PI * 2;
      const distance = BADGE_SIZE * (0.62 + (i % 3) * 0.12);
      const size = 6 + (i % 3) * 2;
      return {
        width: size,
        height: i % 2 === 0 ? size : size * 2,
        color: PARTICLE_COLORS[i % PARTICLE_COLORS.length],
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance * 0.85,
        rotate: (i * 47) % 360,
      };
    }
  );

  ngOnInit(): void {
    this.updateDays();
  }

  private updateDays(): void {
    const country = this.getCountry();
    this.days = getStreakDays(this.consecutiveDays, new Date(), country);
  }

  getCountry(): string {
    if (typeof navigator !== 'undefined' && navigator.language) {
      const parts = navigator.language.split('-');
      return parts.length > 1 ? parts[parts.length - 1].toUpperCase() : 'US';
    }
    return 'US';
  }

  isLastChecked(index: number): boolean {
    const next = this.days[index + 1];
    return this.days[index].checked && (!next || !next.checked);
  }

  get previousValue(): number {
    return this.consecutiveDays > 0
      ? this.consecutiveDays - 1
      : this.consecutiveDays;
  }

  get currentValue(): number {
    return this.consecutiveDays === 0 ? 1 : this.consecutiveDays;
  }
}

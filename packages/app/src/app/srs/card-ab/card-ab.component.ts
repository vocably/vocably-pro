import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { CardItem } from '@vocably/model';
import { SrsScore } from '@vocably/srs';
import { ReverseFrontComponent } from '../reverse-front/reverse-front.component';
import { TranslocoModule } from '@jsverse/transloco';
import { shuffle } from 'lodash-es';
import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { hideAnimation } from '../hide-animation';
import { PlaySoundComponent } from '../../components/play-sound/play-sound.component';
import { MatIcon } from '@angular/material/icon';
import { isRtlText } from '../isRtlText';

@Component({
  selector: 'app-srs-card-ab',
  imports: [
    ReverseFrontComponent,
    TranslocoModule,
    PlaySoundComponent,
    MatIcon,
  ],
  templateUrl: './card-ab.component.html',
  styleUrl: './card-ab.component.scss',
  animations: [
    trigger('shake', [
      transition('false => true', [
        // Damped offsets: starts strong, decays naturally
        animate(
          '420ms ease-out',
          keyframes(
            [0, -1, 1, -0.8, 0.8, -0.6, 0.6, -0.3, 0.3, 0].map((o) =>
              style({ transform: `translateX(${o * 14}px)` })
            )
          )
        ),
      ]),
    ]),
    hideAnimation,
  ],
  host: {
    '[@hide]': 'correct',
    '(@hide.done)': 'onHideAnimationCompleted()',
  },
})
export class CardAbComponent implements OnInit {
  @Input() card!: CardItem;
  @Output() grade = new EventEmitter<SrsScore>();

  correctAnswer: string = '';
  letters: string[] = [];
  answer: Array<number | false> = [];
  isRtl = false;

  answerDisplayed = false;
  wrong = false;
  correct = false;

  hadErrors = false;

  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (this.correct) {
      return;
    }

    if (event.key === 'Backspace') {
      for (
        let letterIndex = this.answer.length - 1;
        letterIndex >= 0;
        letterIndex--
      ) {
        if (this.answer[letterIndex] !== false) {
          this.unuseLetter(letterIndex);
          break;
        }
      }
      return;
    }

    const key = event.key.toUpperCase();

    for (
      let letterIndex = 0;
      letterIndex < this.letters.length;
      letterIndex++
    ) {
      if (this.letters[letterIndex].toUpperCase() !== key) {
        continue;
      }

      if (!this.answer.includes(letterIndex)) {
        this.useLetter(letterIndex);
        break;
      }
    }
  }

  ngOnInit() {
    this.correctAnswer = this.card.data.source.toUpperCase();
    this.isRtl = isRtlText(this.correctAnswer);
    this.letters = shuffle(this.correctAnswer.split(''));
    this.answer = this.letters.map(() => false);
  }

  checkAnswer() {
    const answerString = this.answer
      .map((letterIndex) =>
        letterIndex !== false ? this.letters[letterIndex] : ''
      )
      .join('');
    if (answerString === this.correctAnswer) {
      this.correct = true;
    } else {
      this.wrong = true;
      this.hadErrors = true;
    }
  }

  useLetter(index: number) {
    for (let i = 0; i < this.answer.length; i++) {
      if (this.answer[i] === false) {
        this.answer[i] = index;
        break;
      }
    }

    if (this.answer.every((letterIndex) => letterIndex !== false)) {
      this.checkAnswer();
    }
  }

  unuseLetter(index: number) {
    this.answer[index] = false;
    this.wrong = false;
  }

  clearAll() {
    this.answer = this.answer.map(() => false);
    this.wrong = false;
  }

  get nextSlotIndex(): number {
    return this.answer.indexOf(false);
  }

  get isAnswerEmpty(): boolean {
    return this.answer.every((letterIndex) => letterIndex === false);
  }

  // Shrinks the tiles of long words a bit before they start wrapping
  get tileGap(): number {
    return this.letters.length > 8 ? 6 : 8;
  }

  onHideAnimationCompleted = () => {
    if (this.correct) {
      this.grade.emit(this.hadErrors || this.answerDisplayed ? 3 : 5);
    }
  };

  accessibleLetter(letter: string): string {
    return letter === ' ' ? '_' : letter;
  }
}

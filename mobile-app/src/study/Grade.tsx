import { CardItem } from '@vocably/model';
import { SrsScore } from '@vocably/srs';
import { FC } from 'react';
import { Card } from './Card';
import { getMultiChoice } from './getMultiChoice';
import { MultiChoiceBack } from './MultiChoiceBack';
import { SwipeGrade } from './SwipeGrade';

type Props = {
  autoPlay: boolean;
  isMultiChoiceEnabled: boolean;
  card: CardItem;
  onGrade: (score: SrsScore) => void;
  existingCards: CardItem[];
};

export const Grade: FC<Props> = ({
  card,
  isMultiChoiceEnabled,
  existingCards,
  autoPlay,
  onGrade,
}) => {
  const multiChoice =
    isMultiChoiceEnabled && card.data.repetition === 0
      ? getMultiChoice(card, existingCards)
      : [];

  return (
    <>
      {multiChoice.length === 0 && (
        <SwipeGrade onGrade={onGrade} key={card.id}>
          <Card autoPlay={autoPlay} card={card} />
        </SwipeGrade>
      )}
      {multiChoice.length > 0 && (
        <MultiChoiceBack
          key={card.id}
          autoPlay={autoPlay}
          card={card}
          alternatives={multiChoice}
          onGrade={onGrade}
        />
      )}
    </>
  );
};

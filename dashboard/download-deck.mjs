import { exec } from 'child_process';
import { config } from 'dotenv-flow';
import { inspect, promisify } from 'node:util';
import 'zx/globals';

config();

const execute = promisify(exec);

const key = process.argv[2];

const deck = JSON.parse(
  (await execute(`aws s3 cp s3://vocably-prod-cards/${key} -`)).stdout || '""'
);

const cards = deck.cards
  .sort((a, b) => b.created - a.created)
  .map((card) => ({
    ...card,
    created: new Date(card.created),
    updated: card.updated && new Date(card.updated),
  }));

console.log('cards', inspect(cards, { depth: null }));

console.log('# of cards', cards.length);

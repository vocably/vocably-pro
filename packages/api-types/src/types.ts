/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface Card {
  language?: string;
  sideA: string;
  sideB: string;
}

export interface CardItem {
  id: string;
  created: number;
  updated?: number;
  data: Card;
}

export interface Translation {
  language: string;
  text: string;
  cards: CardItem[];
}

export interface Phrase {
  phrase: string;
  language?: string;
}

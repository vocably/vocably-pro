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

export interface LexicalaSearchResultItem {
  id: string;
  language: string;
  headword: { text?: string; pos?: string };
  senses: { id?: string; definition?: string }[];
}

export interface Translation {
  language: string;
  text: string;
  lexicala?: LexicalaSearchResultItem[];
}

export interface Phrase {
  phrase: string;
  language?: string;
}

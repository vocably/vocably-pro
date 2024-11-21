import { trim } from 'lodash-es';

export const trimSource = (source: string): string => trim(source, ' ,-.');

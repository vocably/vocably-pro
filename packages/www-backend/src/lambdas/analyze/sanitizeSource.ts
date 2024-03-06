import { trim } from 'lodash-es';

export const sanitizeSource = (source: string): string => trim(source, ' ,-.');

import { inspect as nodeInspect } from 'util';

export const inspect = (data: any) =>
  nodeInspect(JSON.parse(JSON.stringify(data)), {
    showHidden: false,
    depth: null,
  });

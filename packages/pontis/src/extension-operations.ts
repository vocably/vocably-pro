import { createExternalMessage } from '@vocably/hermes';

const scope = 'authStorage';

export const [setItem, onSetItemRequest] = createExternalMessage<
  { key: string; value: string },
  void
>(`${scope}.setItem`);

export const [removeItem, onRemoveItemRequest] = createExternalMessage<
  string,
  void
>(`${scope}.removeItem`);

export const [getAll, onGetAllRequest] = createExternalMessage<
  void,
  Record<string, string>
>(`${scope}.getAll`);

export const [clear, onClearRequest] = createExternalMessage<void, void>(
  `${scope}.clear`
);

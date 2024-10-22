import { TagItem } from '@vocably/model';

export const buildTagMap = (tags: TagItem[]): Record<string, TagItem> => {
  return tags.reduce(
    (acc, tag) => ({
      ...acc,
      [tag.id]: tag,
    }),
    {} as Record<string, TagItem>
  );
};

export const isSelection = (
  anchor: Selection | HTMLElement
): anchor is Selection => {
  return anchor instanceof Selection;
};

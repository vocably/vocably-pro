export type GlobalRect = {
  left: number;
  top: number;
  width: number;
  height: number;
};

export const getGlobalRect = (rect: DOMRect): GlobalRect => {
  return {
    width: rect.width,
    height: rect.height,
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY,
  };
};

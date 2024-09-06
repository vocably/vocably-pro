const isHtmlElement = (node: Node): node is HTMLElement => {
  return node.nodeType === Node.ELEMENT_NODE;
};

const getPreviousSibling = (node: Node | null): Node | null => {
  if (node === null) {
    return null;
  }

  if (
    isHtmlElement(node) &&
    !getComputedStyle(node).display.includes('inline')
  ) {
    return null;
  }

  if (node.previousSibling) {
    return node.previousSibling;
  }

  if (!node.parentNode) {
    return null;
  }

  return getPreviousSibling(node.parentNode);
};

const getNextSibling = (node: Node | null): Node | null => {
  if (node === null) {
    return null;
  }

  if (
    isHtmlElement(node) &&
    !getComputedStyle(node).display.includes('inline')
  ) {
    return null;
  }

  if (node.nextSibling) {
    return node.nextSibling;
  }

  if (!node.parentNode) {
    return null;
  }

  return getNextSibling(node.parentNode);
};

const parseBackward = (
  node: Node | null,
  context: string,
  startOffset?: number
): string => {
  if (!node || !node.textContent) {
    return context;
  }

  let newContext = context;
  const offset = startOffset ?? node.textContent.length;

  for (let i = offset - 1; i >= 0; i--) {
    const char = node.textContent?.[i];
    if (char === '.') {
      return newContext;
    }

    newContext = char + newContext;
  }

  const previousSibling = getPreviousSibling(node);

  if (previousSibling) {
    return parseBackward(previousSibling, newContext);
  }

  return newContext;
};

const parseForward = (
  node: Node | null,
  context: string,
  endOffset?: number
): string => {
  if (node === null) {
    return context;
  }

  if (!node.textContent) {
    return context;
  }

  let newContext = context;
  const offset = endOffset ?? 0;

  for (let i = offset; i < node.textContent.length; i++) {
    const char = node.textContent?.[i];
    if (char === '.') {
      return newContext;
    }

    newContext = newContext + char;
  }

  const nextSibling = getNextSibling(node);

  if (nextSibling) {
    return parseForward(nextSibling, newContext);
  }

  return newContext;
};

export const getContextFromSelection = (selection: Selection): string => {
  if (selection.rangeCount === 0) {
    return '';
  }

  const range = selection.getRangeAt(0);

  return parseForward(
    range.endContainer,
    parseBackward(
      range.startContainer,
      selection.toString(),
      range.startOffset
    ),
    range.endOffset
  );
};

export const getContextFromHTMLElement = (htmlElement: HTMLElement) => {
  return parseForward(
    getNextSibling(htmlElement),
    parseBackward(getPreviousSibling(htmlElement), htmlElement.textContent)
  );
};

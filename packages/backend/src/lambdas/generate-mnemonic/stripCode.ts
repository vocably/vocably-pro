export const stripCode = (text: string): string => {
  return text
    .replace(/```[\s\S]*?\n([\s\S]*?)\n```/g, '$1')
    .replace(/`([^`]+)`/g, '$1');
};

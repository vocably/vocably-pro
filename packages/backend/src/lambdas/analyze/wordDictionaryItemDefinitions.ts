export const getItemDefinitions = (wdDefinitions: string): string[] => {
  if (!wdDefinitions) {
    return [];
  }

  return wdDefinitions.split(/\r?\n/).map((item) => item.replace(/^\([a-z]+\)\s*/, ""));
}

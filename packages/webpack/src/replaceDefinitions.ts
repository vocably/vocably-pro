export const replaceDefinitions = (
  content: string,
  definitions: Record<string, string>
) =>
  Object.entries(definitions).reduce((acc, [find, replace]) => {
    return acc.replace(
      `{{ ${find} }}`,
      replace.replace(/\\"/gm, '"').replace(/\\{2}/gm, '\\').slice(1, -1)
    );
  }, content);

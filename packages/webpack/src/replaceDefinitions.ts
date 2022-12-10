export const replaceDefinitions = (
  content: string,
  definitions: [string, string][]
) =>
  definitions.reduce(
    (acc, [find, replace]) => acc.replace(`{{ ${find} }}`, replace),
    content
  );

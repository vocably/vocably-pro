import { Translation } from "@vocably/model";
import { LexicalaSearchResultItemWithNormalHeadword } from "../../lexicala/normalizeHeadword";

export const lexicalaItemHasDefinitionOrCanBeTranslated = (translation: Translation) => (item: LexicalaSearchResultItemWithNormalHeadword): boolean => {
  if (translation.sourceLanguage !== translation.targetLanguage) {
    return true;
  }

  if (item.senses.some(s => s.definition)) {
    return true;
  }

  return false;
}

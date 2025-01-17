import { CardItem, GoogleLanguage } from '@vocably/model';

export const getPredefinedMultiChoiceOptions = (
  sourceLanguage: GoogleLanguage,
  translationLanguage: GoogleLanguage
): CardItem[] => {
  switch (`${sourceLanguage}-${translationLanguage}`) {
    case 'ar-ar':
      return require('./predefinedMultiChoiceOptions/ar-ar.ts')
        .predefinedMultiChoiceOptions;
    case 'ar-az':
      return require('./predefinedMultiChoiceOptions/ar-az.ts')
        .predefinedMultiChoiceOptions;
    case 'ar-da':
      return require('./predefinedMultiChoiceOptions/ar-da.ts')
        .predefinedMultiChoiceOptions;
    case 'ar-de':
      return require('./predefinedMultiChoiceOptions/ar-de.ts')
        .predefinedMultiChoiceOptions;
    case 'ar-el':
      return require('./predefinedMultiChoiceOptions/ar-el.ts')
        .predefinedMultiChoiceOptions;
    case 'ar-en':
      return require('./predefinedMultiChoiceOptions/ar-en.ts')
        .predefinedMultiChoiceOptions;
    case 'ar-es':
      return require('./predefinedMultiChoiceOptions/ar-es.ts')
        .predefinedMultiChoiceOptions;
    case 'ar-fa':
      return require('./predefinedMultiChoiceOptions/ar-fa.ts')
        .predefinedMultiChoiceOptions;
    case 'ar-fi':
      return require('./predefinedMultiChoiceOptions/ar-fi.ts')
        .predefinedMultiChoiceOptions;
    case 'ar-fr':
      return require('./predefinedMultiChoiceOptions/ar-fr.ts')
        .predefinedMultiChoiceOptions;
    case 'ar-he':
      return require('./predefinedMultiChoiceOptions/ar-he.ts')
        .predefinedMultiChoiceOptions;
    case 'ar-hi':
      return require('./predefinedMultiChoiceOptions/ar-hi.ts')
        .predefinedMultiChoiceOptions;
    case 'ar-hy':
      return require('./predefinedMultiChoiceOptions/ar-hy.ts')
        .predefinedMultiChoiceOptions;
    case 'ar-id':
      return require('./predefinedMultiChoiceOptions/ar-id.ts')
        .predefinedMultiChoiceOptions;
    case 'ar-it':
      return require('./predefinedMultiChoiceOptions/ar-it.ts')
        .predefinedMultiChoiceOptions;
    case 'ar-ja':
      return require('./predefinedMultiChoiceOptions/ar-ja.ts')
        .predefinedMultiChoiceOptions;
    case 'ar-ka':
      return require('./predefinedMultiChoiceOptions/ar-ka.ts')
        .predefinedMultiChoiceOptions;
    case 'ar-kk':
      return require('./predefinedMultiChoiceOptions/ar-kk.ts')
        .predefinedMultiChoiceOptions;
    case 'ar-ko':
      return require('./predefinedMultiChoiceOptions/ar-ko.ts')
        .predefinedMultiChoiceOptions;
    case 'ar-ms':
      return require('./predefinedMultiChoiceOptions/ar-ms.ts')
        .predefinedMultiChoiceOptions;
    case 'ar-nl':
      return require('./predefinedMultiChoiceOptions/ar-nl.ts')
        .predefinedMultiChoiceOptions;
    case 'ar-no':
      return require('./predefinedMultiChoiceOptions/ar-no.ts')
        .predefinedMultiChoiceOptions;
    case 'ar-pl':
      return require('./predefinedMultiChoiceOptions/ar-pl.ts')
        .predefinedMultiChoiceOptions;
    case 'ar-pt':
      return require('./predefinedMultiChoiceOptions/ar-pt.ts')
        .predefinedMultiChoiceOptions;
    case 'ar-ru':
      return require('./predefinedMultiChoiceOptions/ar-ru.ts')
        .predefinedMultiChoiceOptions;
    case 'ar-sv':
      return require('./predefinedMultiChoiceOptions/ar-sv.ts')
        .predefinedMultiChoiceOptions;
    case 'ar-th':
      return require('./predefinedMultiChoiceOptions/ar-th.ts')
        .predefinedMultiChoiceOptions;
    case 'ar-tr':
      return require('./predefinedMultiChoiceOptions/ar-tr.ts')
        .predefinedMultiChoiceOptions;
    case 'ar-uk':
      return require('./predefinedMultiChoiceOptions/ar-uk.ts')
        .predefinedMultiChoiceOptions;
    case 'ar-vi':
      return require('./predefinedMultiChoiceOptions/ar-vi.ts')
        .predefinedMultiChoiceOptions;
    case 'ar-zh':
      return require('./predefinedMultiChoiceOptions/ar-zh.ts')
        .predefinedMultiChoiceOptions;
    case 'ar-zh-TW':
      return require('./predefinedMultiChoiceOptions/ar-zh-TW.ts')
        .predefinedMultiChoiceOptions;
    case 'da-ar':
      return require('./predefinedMultiChoiceOptions/da-ar.ts')
        .predefinedMultiChoiceOptions;
    case 'da-de':
      return require('./predefinedMultiChoiceOptions/da-de.ts')
        .predefinedMultiChoiceOptions;
    case 'da-en':
      return require('./predefinedMultiChoiceOptions/da-en.ts')
        .predefinedMultiChoiceOptions;
    case 'da-es':
      return require('./predefinedMultiChoiceOptions/da-es.ts')
        .predefinedMultiChoiceOptions;
    case 'da-fr':
      return require('./predefinedMultiChoiceOptions/da-fr.ts')
        .predefinedMultiChoiceOptions;
    case 'da-it':
      return require('./predefinedMultiChoiceOptions/da-it.ts')
        .predefinedMultiChoiceOptions;
    case 'da-ja':
      return require('./predefinedMultiChoiceOptions/da-ja.ts')
        .predefinedMultiChoiceOptions;
    case 'da-ko':
      return require('./predefinedMultiChoiceOptions/da-ko.ts')
        .predefinedMultiChoiceOptions;
    case 'da-nl':
      return require('./predefinedMultiChoiceOptions/da-nl.ts')
        .predefinedMultiChoiceOptions;
    case 'da-pt':
      return require('./predefinedMultiChoiceOptions/da-pt.ts')
        .predefinedMultiChoiceOptions;
    case 'da-ru':
      return require('./predefinedMultiChoiceOptions/da-ru.ts')
        .predefinedMultiChoiceOptions;
    case 'da-zh':
      return require('./predefinedMultiChoiceOptions/da-zh.ts')
        .predefinedMultiChoiceOptions;
    case 'da-zh-TW':
      return require('./predefinedMultiChoiceOptions/da-zh-TW.ts')
        .predefinedMultiChoiceOptions;
    case 'de-ar':
      return require('./predefinedMultiChoiceOptions/de-ar.ts')
        .predefinedMultiChoiceOptions;
    case 'de-az':
      return require('./predefinedMultiChoiceOptions/de-az.ts')
        .predefinedMultiChoiceOptions;
    case 'de-da':
      return require('./predefinedMultiChoiceOptions/de-da.ts')
        .predefinedMultiChoiceOptions;
    case 'de-de':
      return require('./predefinedMultiChoiceOptions/de-de.ts')
        .predefinedMultiChoiceOptions;
    case 'de-el':
      return require('./predefinedMultiChoiceOptions/de-el.ts')
        .predefinedMultiChoiceOptions;
    case 'de-en':
      return require('./predefinedMultiChoiceOptions/de-en.ts')
        .predefinedMultiChoiceOptions;
    case 'de-es':
      return require('./predefinedMultiChoiceOptions/de-es.ts')
        .predefinedMultiChoiceOptions;
    case 'de-fa':
      return require('./predefinedMultiChoiceOptions/de-fa.ts')
        .predefinedMultiChoiceOptions;
    case 'de-fi':
      return require('./predefinedMultiChoiceOptions/de-fi.ts')
        .predefinedMultiChoiceOptions;
    case 'de-fr':
      return require('./predefinedMultiChoiceOptions/de-fr.ts')
        .predefinedMultiChoiceOptions;
    case 'de-he':
      return require('./predefinedMultiChoiceOptions/de-he.ts')
        .predefinedMultiChoiceOptions;
    case 'de-hi':
      return require('./predefinedMultiChoiceOptions/de-hi.ts')
        .predefinedMultiChoiceOptions;
    case 'de-hy':
      return require('./predefinedMultiChoiceOptions/de-hy.ts')
        .predefinedMultiChoiceOptions;
    case 'de-id':
      return require('./predefinedMultiChoiceOptions/de-id.ts')
        .predefinedMultiChoiceOptions;
    case 'de-it':
      return require('./predefinedMultiChoiceOptions/de-it.ts')
        .predefinedMultiChoiceOptions;
    case 'de-ja':
      return require('./predefinedMultiChoiceOptions/de-ja.ts')
        .predefinedMultiChoiceOptions;
    case 'de-ka':
      return require('./predefinedMultiChoiceOptions/de-ka.ts')
        .predefinedMultiChoiceOptions;
    case 'de-kk':
      return require('./predefinedMultiChoiceOptions/de-kk.ts')
        .predefinedMultiChoiceOptions;
    case 'de-ko':
      return require('./predefinedMultiChoiceOptions/de-ko.ts')
        .predefinedMultiChoiceOptions;
    case 'de-ms':
      return require('./predefinedMultiChoiceOptions/de-ms.ts')
        .predefinedMultiChoiceOptions;
    case 'de-nl':
      return require('./predefinedMultiChoiceOptions/de-nl.ts')
        .predefinedMultiChoiceOptions;
    case 'de-no':
      return require('./predefinedMultiChoiceOptions/de-no.ts')
        .predefinedMultiChoiceOptions;
    case 'de-pl':
      return require('./predefinedMultiChoiceOptions/de-pl.ts')
        .predefinedMultiChoiceOptions;
    case 'de-pt':
      return require('./predefinedMultiChoiceOptions/de-pt.ts')
        .predefinedMultiChoiceOptions;
    case 'de-ru':
      return require('./predefinedMultiChoiceOptions/de-ru.ts')
        .predefinedMultiChoiceOptions;
    case 'de-sv':
      return require('./predefinedMultiChoiceOptions/de-sv.ts')
        .predefinedMultiChoiceOptions;
    case 'de-th':
      return require('./predefinedMultiChoiceOptions/de-th.ts')
        .predefinedMultiChoiceOptions;
    case 'de-tr':
      return require('./predefinedMultiChoiceOptions/de-tr.ts')
        .predefinedMultiChoiceOptions;
    case 'de-uk':
      return require('./predefinedMultiChoiceOptions/de-uk.ts')
        .predefinedMultiChoiceOptions;
    case 'de-vi':
      return require('./predefinedMultiChoiceOptions/de-vi.ts')
        .predefinedMultiChoiceOptions;
    case 'de-zh':
      return require('./predefinedMultiChoiceOptions/de-zh.ts')
        .predefinedMultiChoiceOptions;
    case 'de-zh-TW':
      return require('./predefinedMultiChoiceOptions/de-zh-TW.ts')
        .predefinedMultiChoiceOptions;
    case 'en-ar':
      return require('./predefinedMultiChoiceOptions/en-ar.ts')
        .predefinedMultiChoiceOptions;
    case 'en-az':
      return require('./predefinedMultiChoiceOptions/en-az.ts')
        .predefinedMultiChoiceOptions;
    case 'en-da':
      return require('./predefinedMultiChoiceOptions/en-da.ts')
        .predefinedMultiChoiceOptions;
    case 'en-de':
      return require('./predefinedMultiChoiceOptions/en-de.ts')
        .predefinedMultiChoiceOptions;
    case 'en-el':
      return require('./predefinedMultiChoiceOptions/en-el.ts')
        .predefinedMultiChoiceOptions;
    case 'en-en':
      return require('./predefinedMultiChoiceOptions/en-en.ts')
        .predefinedMultiChoiceOptions;
    case 'en-es':
      return require('./predefinedMultiChoiceOptions/en-es.ts')
        .predefinedMultiChoiceOptions;
    case 'en-fa':
      return require('./predefinedMultiChoiceOptions/en-fa.ts')
        .predefinedMultiChoiceOptions;
    case 'en-fi':
      return require('./predefinedMultiChoiceOptions/en-fi.ts')
        .predefinedMultiChoiceOptions;
    case 'en-fr':
      return require('./predefinedMultiChoiceOptions/en-fr.ts')
        .predefinedMultiChoiceOptions;
    case 'en-he':
      return require('./predefinedMultiChoiceOptions/en-he.ts')
        .predefinedMultiChoiceOptions;
    case 'en-hi':
      return require('./predefinedMultiChoiceOptions/en-hi.ts')
        .predefinedMultiChoiceOptions;
    case 'en-hy':
      return require('./predefinedMultiChoiceOptions/en-hy.ts')
        .predefinedMultiChoiceOptions;
    case 'en-id':
      return require('./predefinedMultiChoiceOptions/en-id.ts')
        .predefinedMultiChoiceOptions;
    case 'en-it':
      return require('./predefinedMultiChoiceOptions/en-it.ts')
        .predefinedMultiChoiceOptions;
    case 'en-ja':
      return require('./predefinedMultiChoiceOptions/en-ja.ts')
        .predefinedMultiChoiceOptions;
    case 'en-ka':
      return require('./predefinedMultiChoiceOptions/en-ka.ts')
        .predefinedMultiChoiceOptions;
    case 'en-kk':
      return require('./predefinedMultiChoiceOptions/en-kk.ts')
        .predefinedMultiChoiceOptions;
    case 'en-ko':
      return require('./predefinedMultiChoiceOptions/en-ko.ts')
        .predefinedMultiChoiceOptions;
    case 'en-ms':
      return require('./predefinedMultiChoiceOptions/en-ms.ts')
        .predefinedMultiChoiceOptions;
    case 'en-nl':
      return require('./predefinedMultiChoiceOptions/en-nl.ts')
        .predefinedMultiChoiceOptions;
    case 'en-no':
      return require('./predefinedMultiChoiceOptions/en-no.ts')
        .predefinedMultiChoiceOptions;
    case 'en-pl':
      return require('./predefinedMultiChoiceOptions/en-pl.ts')
        .predefinedMultiChoiceOptions;
    case 'en-pt':
      return require('./predefinedMultiChoiceOptions/en-pt.ts')
        .predefinedMultiChoiceOptions;
    case 'en-ru':
      return require('./predefinedMultiChoiceOptions/en-ru.ts')
        .predefinedMultiChoiceOptions;
    case 'en-sv':
      return require('./predefinedMultiChoiceOptions/en-sv.ts')
        .predefinedMultiChoiceOptions;
    case 'en-th':
      return require('./predefinedMultiChoiceOptions/en-th.ts')
        .predefinedMultiChoiceOptions;
    case 'en-tr':
      return require('./predefinedMultiChoiceOptions/en-tr.ts')
        .predefinedMultiChoiceOptions;
    case 'en-uk':
      return require('./predefinedMultiChoiceOptions/en-uk.ts')
        .predefinedMultiChoiceOptions;
    case 'en-vi':
      return require('./predefinedMultiChoiceOptions/en-vi.ts')
        .predefinedMultiChoiceOptions;
    case 'en-zh':
      return require('./predefinedMultiChoiceOptions/en-zh.ts')
        .predefinedMultiChoiceOptions;
    case 'en-zh-TW':
      return require('./predefinedMultiChoiceOptions/en-zh-TW.ts')
        .predefinedMultiChoiceOptions;
    case 'es-ar':
      return require('./predefinedMultiChoiceOptions/es-ar.ts')
        .predefinedMultiChoiceOptions;
    case 'es-az':
      return require('./predefinedMultiChoiceOptions/es-az.ts')
        .predefinedMultiChoiceOptions;
    case 'es-da':
      return require('./predefinedMultiChoiceOptions/es-da.ts')
        .predefinedMultiChoiceOptions;
    case 'es-de':
      return require('./predefinedMultiChoiceOptions/es-de.ts')
        .predefinedMultiChoiceOptions;
    case 'es-el':
      return require('./predefinedMultiChoiceOptions/es-el.ts')
        .predefinedMultiChoiceOptions;
    case 'es-en':
      return require('./predefinedMultiChoiceOptions/es-en.ts')
        .predefinedMultiChoiceOptions;
    case 'es-es':
      return require('./predefinedMultiChoiceOptions/es-es.ts')
        .predefinedMultiChoiceOptions;
    case 'es-fa':
      return require('./predefinedMultiChoiceOptions/es-fa.ts')
        .predefinedMultiChoiceOptions;
    case 'es-fi':
      return require('./predefinedMultiChoiceOptions/es-fi.ts')
        .predefinedMultiChoiceOptions;
    case 'es-fr':
      return require('./predefinedMultiChoiceOptions/es-fr.ts')
        .predefinedMultiChoiceOptions;
    case 'es-he':
      return require('./predefinedMultiChoiceOptions/es-he.ts')
        .predefinedMultiChoiceOptions;
    case 'es-hi':
      return require('./predefinedMultiChoiceOptions/es-hi.ts')
        .predefinedMultiChoiceOptions;
    case 'es-hy':
      return require('./predefinedMultiChoiceOptions/es-hy.ts')
        .predefinedMultiChoiceOptions;
    case 'es-id':
      return require('./predefinedMultiChoiceOptions/es-id.ts')
        .predefinedMultiChoiceOptions;
    case 'es-it':
      return require('./predefinedMultiChoiceOptions/es-it.ts')
        .predefinedMultiChoiceOptions;
    case 'es-ja':
      return require('./predefinedMultiChoiceOptions/es-ja.ts')
        .predefinedMultiChoiceOptions;
    case 'es-ka':
      return require('./predefinedMultiChoiceOptions/es-ka.ts')
        .predefinedMultiChoiceOptions;
    case 'es-kk':
      return require('./predefinedMultiChoiceOptions/es-kk.ts')
        .predefinedMultiChoiceOptions;
    case 'es-ko':
      return require('./predefinedMultiChoiceOptions/es-ko.ts')
        .predefinedMultiChoiceOptions;
    case 'es-ms':
      return require('./predefinedMultiChoiceOptions/es-ms.ts')
        .predefinedMultiChoiceOptions;
    case 'es-nl':
      return require('./predefinedMultiChoiceOptions/es-nl.ts')
        .predefinedMultiChoiceOptions;
    case 'es-no':
      return require('./predefinedMultiChoiceOptions/es-no.ts')
        .predefinedMultiChoiceOptions;
    case 'es-pl':
      return require('./predefinedMultiChoiceOptions/es-pl.ts')
        .predefinedMultiChoiceOptions;
    case 'es-pt':
      return require('./predefinedMultiChoiceOptions/es-pt.ts')
        .predefinedMultiChoiceOptions;
    case 'es-ru':
      return require('./predefinedMultiChoiceOptions/es-ru.ts')
        .predefinedMultiChoiceOptions;
    case 'es-sv':
      return require('./predefinedMultiChoiceOptions/es-sv.ts')
        .predefinedMultiChoiceOptions;
    case 'es-th':
      return require('./predefinedMultiChoiceOptions/es-th.ts')
        .predefinedMultiChoiceOptions;
    case 'es-tr':
      return require('./predefinedMultiChoiceOptions/es-tr.ts')
        .predefinedMultiChoiceOptions;
    case 'es-uk':
      return require('./predefinedMultiChoiceOptions/es-uk.ts')
        .predefinedMultiChoiceOptions;
    case 'es-vi':
      return require('./predefinedMultiChoiceOptions/es-vi.ts')
        .predefinedMultiChoiceOptions;
    case 'es-zh':
      return require('./predefinedMultiChoiceOptions/es-zh.ts')
        .predefinedMultiChoiceOptions;
    case 'es-zh-TW':
      return require('./predefinedMultiChoiceOptions/es-zh-TW.ts')
        .predefinedMultiChoiceOptions;
    case 'fi-ar':
      return require('./predefinedMultiChoiceOptions/fi-ar.ts')
        .predefinedMultiChoiceOptions;
    case 'fi-az':
      return require('./predefinedMultiChoiceOptions/fi-az.ts')
        .predefinedMultiChoiceOptions;
    case 'fi-da':
      return require('./predefinedMultiChoiceOptions/fi-da.ts')
        .predefinedMultiChoiceOptions;
    case 'fi-de':
      return require('./predefinedMultiChoiceOptions/fi-de.ts')
        .predefinedMultiChoiceOptions;
    case 'fi-el':
      return require('./predefinedMultiChoiceOptions/fi-el.ts')
        .predefinedMultiChoiceOptions;
    case 'fi-en':
      return require('./predefinedMultiChoiceOptions/fi-en.ts')
        .predefinedMultiChoiceOptions;
    case 'fi-es':
      return require('./predefinedMultiChoiceOptions/fi-es.ts')
        .predefinedMultiChoiceOptions;
    case 'fi-fa':
      return require('./predefinedMultiChoiceOptions/fi-fa.ts')
        .predefinedMultiChoiceOptions;
    case 'fi-fi':
      return require('./predefinedMultiChoiceOptions/fi-fi.ts')
        .predefinedMultiChoiceOptions;
    case 'fi-fr':
      return require('./predefinedMultiChoiceOptions/fi-fr.ts')
        .predefinedMultiChoiceOptions;
    case 'fi-he':
      return require('./predefinedMultiChoiceOptions/fi-he.ts')
        .predefinedMultiChoiceOptions;
    case 'fi-hi':
      return require('./predefinedMultiChoiceOptions/fi-hi.ts')
        .predefinedMultiChoiceOptions;
    case 'fi-hy':
      return require('./predefinedMultiChoiceOptions/fi-hy.ts')
        .predefinedMultiChoiceOptions;
    case 'fi-id':
      return require('./predefinedMultiChoiceOptions/fi-id.ts')
        .predefinedMultiChoiceOptions;
    case 'fi-it':
      return require('./predefinedMultiChoiceOptions/fi-it.ts')
        .predefinedMultiChoiceOptions;
    case 'fi-ja':
      return require('./predefinedMultiChoiceOptions/fi-ja.ts')
        .predefinedMultiChoiceOptions;
    case 'fi-ka':
      return require('./predefinedMultiChoiceOptions/fi-ka.ts')
        .predefinedMultiChoiceOptions;
    case 'fi-kk':
      return require('./predefinedMultiChoiceOptions/fi-kk.ts')
        .predefinedMultiChoiceOptions;
    case 'fi-ko':
      return require('./predefinedMultiChoiceOptions/fi-ko.ts')
        .predefinedMultiChoiceOptions;
    case 'fi-ms':
      return require('./predefinedMultiChoiceOptions/fi-ms.ts')
        .predefinedMultiChoiceOptions;
    case 'fi-nl':
      return require('./predefinedMultiChoiceOptions/fi-nl.ts')
        .predefinedMultiChoiceOptions;
    case 'fi-no':
      return require('./predefinedMultiChoiceOptions/fi-no.ts')
        .predefinedMultiChoiceOptions;
    case 'fi-pl':
      return require('./predefinedMultiChoiceOptions/fi-pl.ts')
        .predefinedMultiChoiceOptions;
    case 'fi-pt':
      return require('./predefinedMultiChoiceOptions/fi-pt.ts')
        .predefinedMultiChoiceOptions;
    case 'fi-ru':
      return require('./predefinedMultiChoiceOptions/fi-ru.ts')
        .predefinedMultiChoiceOptions;
    case 'fi-sv':
      return require('./predefinedMultiChoiceOptions/fi-sv.ts')
        .predefinedMultiChoiceOptions;
    case 'fi-th':
      return require('./predefinedMultiChoiceOptions/fi-th.ts')
        .predefinedMultiChoiceOptions;
    case 'fi-tr':
      return require('./predefinedMultiChoiceOptions/fi-tr.ts')
        .predefinedMultiChoiceOptions;
    case 'fi-uk':
      return require('./predefinedMultiChoiceOptions/fi-uk.ts')
        .predefinedMultiChoiceOptions;
    case 'fi-vi':
      return require('./predefinedMultiChoiceOptions/fi-vi.ts')
        .predefinedMultiChoiceOptions;
    case 'fi-zh':
      return require('./predefinedMultiChoiceOptions/fi-zh.ts')
        .predefinedMultiChoiceOptions;
    case 'fi-zh-TW':
      return require('./predefinedMultiChoiceOptions/fi-zh-TW.ts')
        .predefinedMultiChoiceOptions;
    case 'fr-ar':
      return require('./predefinedMultiChoiceOptions/fr-ar.ts')
        .predefinedMultiChoiceOptions;
    case 'fr-az':
      return require('./predefinedMultiChoiceOptions/fr-az.ts')
        .predefinedMultiChoiceOptions;
    case 'fr-da':
      return require('./predefinedMultiChoiceOptions/fr-da.ts')
        .predefinedMultiChoiceOptions;
    case 'fr-de':
      return require('./predefinedMultiChoiceOptions/fr-de.ts')
        .predefinedMultiChoiceOptions;
    case 'fr-el':
      return require('./predefinedMultiChoiceOptions/fr-el.ts')
        .predefinedMultiChoiceOptions;
    case 'fr-en':
      return require('./predefinedMultiChoiceOptions/fr-en.ts')
        .predefinedMultiChoiceOptions;
    case 'fr-es':
      return require('./predefinedMultiChoiceOptions/fr-es.ts')
        .predefinedMultiChoiceOptions;
    case 'fr-fa':
      return require('./predefinedMultiChoiceOptions/fr-fa.ts')
        .predefinedMultiChoiceOptions;
    case 'fr-fi':
      return require('./predefinedMultiChoiceOptions/fr-fi.ts')
        .predefinedMultiChoiceOptions;
    case 'fr-fr':
      return require('./predefinedMultiChoiceOptions/fr-fr.ts')
        .predefinedMultiChoiceOptions;
    case 'fr-he':
      return require('./predefinedMultiChoiceOptions/fr-he.ts')
        .predefinedMultiChoiceOptions;
    case 'fr-hi':
      return require('./predefinedMultiChoiceOptions/fr-hi.ts')
        .predefinedMultiChoiceOptions;
    case 'fr-hy':
      return require('./predefinedMultiChoiceOptions/fr-hy.ts')
        .predefinedMultiChoiceOptions;
    case 'fr-id':
      return require('./predefinedMultiChoiceOptions/fr-id.ts')
        .predefinedMultiChoiceOptions;
    case 'fr-it':
      return require('./predefinedMultiChoiceOptions/fr-it.ts')
        .predefinedMultiChoiceOptions;
    case 'fr-ja':
      return require('./predefinedMultiChoiceOptions/fr-ja.ts')
        .predefinedMultiChoiceOptions;
    case 'fr-ka':
      return require('./predefinedMultiChoiceOptions/fr-ka.ts')
        .predefinedMultiChoiceOptions;
    case 'fr-kk':
      return require('./predefinedMultiChoiceOptions/fr-kk.ts')
        .predefinedMultiChoiceOptions;
    case 'fr-ko':
      return require('./predefinedMultiChoiceOptions/fr-ko.ts')
        .predefinedMultiChoiceOptions;
    case 'fr-ms':
      return require('./predefinedMultiChoiceOptions/fr-ms.ts')
        .predefinedMultiChoiceOptions;
    case 'fr-nl':
      return require('./predefinedMultiChoiceOptions/fr-nl.ts')
        .predefinedMultiChoiceOptions;
    case 'fr-no':
      return require('./predefinedMultiChoiceOptions/fr-no.ts')
        .predefinedMultiChoiceOptions;
    case 'fr-pl':
      return require('./predefinedMultiChoiceOptions/fr-pl.ts')
        .predefinedMultiChoiceOptions;
    case 'fr-pt':
      return require('./predefinedMultiChoiceOptions/fr-pt.ts')
        .predefinedMultiChoiceOptions;
    case 'fr-ru':
      return require('./predefinedMultiChoiceOptions/fr-ru.ts')
        .predefinedMultiChoiceOptions;
    case 'fr-sv':
      return require('./predefinedMultiChoiceOptions/fr-sv.ts')
        .predefinedMultiChoiceOptions;
    case 'fr-th':
      return require('./predefinedMultiChoiceOptions/fr-th.ts')
        .predefinedMultiChoiceOptions;
    case 'fr-tr':
      return require('./predefinedMultiChoiceOptions/fr-tr.ts')
        .predefinedMultiChoiceOptions;
    case 'fr-uk':
      return require('./predefinedMultiChoiceOptions/fr-uk.ts')
        .predefinedMultiChoiceOptions;
    case 'fr-vi':
      return require('./predefinedMultiChoiceOptions/fr-vi.ts')
        .predefinedMultiChoiceOptions;
    case 'fr-zh':
      return require('./predefinedMultiChoiceOptions/fr-zh.ts')
        .predefinedMultiChoiceOptions;
    case 'fr-zh-TW':
      return require('./predefinedMultiChoiceOptions/fr-zh-TW.ts')
        .predefinedMultiChoiceOptions;
    case 'he-de':
      return require('./predefinedMultiChoiceOptions/he-de.ts')
        .predefinedMultiChoiceOptions;
    case 'he-en':
      return require('./predefinedMultiChoiceOptions/he-en.ts')
        .predefinedMultiChoiceOptions;
    case 'he-es':
      return require('./predefinedMultiChoiceOptions/he-es.ts')
        .predefinedMultiChoiceOptions;
    case 'he-fr':
      return require('./predefinedMultiChoiceOptions/he-fr.ts')
        .predefinedMultiChoiceOptions;
    case 'he-it':
      return require('./predefinedMultiChoiceOptions/he-it.ts')
        .predefinedMultiChoiceOptions;
    case 'he-ja':
      return require('./predefinedMultiChoiceOptions/he-ja.ts')
        .predefinedMultiChoiceOptions;
    case 'he-ru':
      return require('./predefinedMultiChoiceOptions/he-ru.ts')
        .predefinedMultiChoiceOptions;
    case 'he-zh':
      return require('./predefinedMultiChoiceOptions/he-zh.ts')
        .predefinedMultiChoiceOptions;
    case 'he-zh-TW':
      return require('./predefinedMultiChoiceOptions/he-zh-TW.ts')
        .predefinedMultiChoiceOptions;
    case 'it-ar':
      return require('./predefinedMultiChoiceOptions/it-ar.ts')
        .predefinedMultiChoiceOptions;
    case 'it-az':
      return require('./predefinedMultiChoiceOptions/it-az.ts')
        .predefinedMultiChoiceOptions;
    case 'it-da':
      return require('./predefinedMultiChoiceOptions/it-da.ts')
        .predefinedMultiChoiceOptions;
    case 'it-de':
      return require('./predefinedMultiChoiceOptions/it-de.ts')
        .predefinedMultiChoiceOptions;
    case 'it-el':
      return require('./predefinedMultiChoiceOptions/it-el.ts')
        .predefinedMultiChoiceOptions;
    case 'it-en':
      return require('./predefinedMultiChoiceOptions/it-en.ts')
        .predefinedMultiChoiceOptions;
    case 'it-es':
      return require('./predefinedMultiChoiceOptions/it-es.ts')
        .predefinedMultiChoiceOptions;
    case 'it-fa':
      return require('./predefinedMultiChoiceOptions/it-fa.ts')
        .predefinedMultiChoiceOptions;
    case 'it-fi':
      return require('./predefinedMultiChoiceOptions/it-fi.ts')
        .predefinedMultiChoiceOptions;
    case 'it-fr':
      return require('./predefinedMultiChoiceOptions/it-fr.ts')
        .predefinedMultiChoiceOptions;
    case 'it-he':
      return require('./predefinedMultiChoiceOptions/it-he.ts')
        .predefinedMultiChoiceOptions;
    case 'it-hi':
      return require('./predefinedMultiChoiceOptions/it-hi.ts')
        .predefinedMultiChoiceOptions;
    case 'it-hy':
      return require('./predefinedMultiChoiceOptions/it-hy.ts')
        .predefinedMultiChoiceOptions;
    case 'it-id':
      return require('./predefinedMultiChoiceOptions/it-id.ts')
        .predefinedMultiChoiceOptions;
    case 'it-it':
      return require('./predefinedMultiChoiceOptions/it-it.ts')
        .predefinedMultiChoiceOptions;
    case 'it-ja':
      return require('./predefinedMultiChoiceOptions/it-ja.ts')
        .predefinedMultiChoiceOptions;
    case 'it-ka':
      return require('./predefinedMultiChoiceOptions/it-ka.ts')
        .predefinedMultiChoiceOptions;
    case 'it-kk':
      return require('./predefinedMultiChoiceOptions/it-kk.ts')
        .predefinedMultiChoiceOptions;
    case 'it-ko':
      return require('./predefinedMultiChoiceOptions/it-ko.ts')
        .predefinedMultiChoiceOptions;
    case 'it-ms':
      return require('./predefinedMultiChoiceOptions/it-ms.ts')
        .predefinedMultiChoiceOptions;
    case 'it-nl':
      return require('./predefinedMultiChoiceOptions/it-nl.ts')
        .predefinedMultiChoiceOptions;
    case 'it-no':
      return require('./predefinedMultiChoiceOptions/it-no.ts')
        .predefinedMultiChoiceOptions;
    case 'it-pl':
      return require('./predefinedMultiChoiceOptions/it-pl.ts')
        .predefinedMultiChoiceOptions;
    case 'it-pt':
      return require('./predefinedMultiChoiceOptions/it-pt.ts')
        .predefinedMultiChoiceOptions;
    case 'it-ru':
      return require('./predefinedMultiChoiceOptions/it-ru.ts')
        .predefinedMultiChoiceOptions;
    case 'it-sv':
      return require('./predefinedMultiChoiceOptions/it-sv.ts')
        .predefinedMultiChoiceOptions;
    case 'it-th':
      return require('./predefinedMultiChoiceOptions/it-th.ts')
        .predefinedMultiChoiceOptions;
    case 'it-tr':
      return require('./predefinedMultiChoiceOptions/it-tr.ts')
        .predefinedMultiChoiceOptions;
    case 'it-uk':
      return require('./predefinedMultiChoiceOptions/it-uk.ts')
        .predefinedMultiChoiceOptions;
    case 'it-vi':
      return require('./predefinedMultiChoiceOptions/it-vi.ts')
        .predefinedMultiChoiceOptions;
    case 'it-zh':
      return require('./predefinedMultiChoiceOptions/it-zh.ts')
        .predefinedMultiChoiceOptions;
    case 'it-zh-TW':
      return require('./predefinedMultiChoiceOptions/it-zh-TW.ts')
        .predefinedMultiChoiceOptions;
    case 'ja-ar':
      return require('./predefinedMultiChoiceOptions/ja-ar.ts')
        .predefinedMultiChoiceOptions;
    case 'ja-az':
      return require('./predefinedMultiChoiceOptions/ja-az.ts')
        .predefinedMultiChoiceOptions;
    case 'ja-da':
      return require('./predefinedMultiChoiceOptions/ja-da.ts')
        .predefinedMultiChoiceOptions;
    case 'ja-de':
      return require('./predefinedMultiChoiceOptions/ja-de.ts')
        .predefinedMultiChoiceOptions;
    case 'ja-el':
      return require('./predefinedMultiChoiceOptions/ja-el.ts')
        .predefinedMultiChoiceOptions;
    case 'ja-en':
      return require('./predefinedMultiChoiceOptions/ja-en.ts')
        .predefinedMultiChoiceOptions;
    case 'ja-es':
      return require('./predefinedMultiChoiceOptions/ja-es.ts')
        .predefinedMultiChoiceOptions;
    case 'ja-fa':
      return require('./predefinedMultiChoiceOptions/ja-fa.ts')
        .predefinedMultiChoiceOptions;
    case 'ja-fi':
      return require('./predefinedMultiChoiceOptions/ja-fi.ts')
        .predefinedMultiChoiceOptions;
    case 'ja-fr':
      return require('./predefinedMultiChoiceOptions/ja-fr.ts')
        .predefinedMultiChoiceOptions;
    case 'ja-he':
      return require('./predefinedMultiChoiceOptions/ja-he.ts')
        .predefinedMultiChoiceOptions;
    case 'ja-hi':
      return require('./predefinedMultiChoiceOptions/ja-hi.ts')
        .predefinedMultiChoiceOptions;
    case 'ja-hy':
      return require('./predefinedMultiChoiceOptions/ja-hy.ts')
        .predefinedMultiChoiceOptions;
    case 'ja-id':
      return require('./predefinedMultiChoiceOptions/ja-id.ts')
        .predefinedMultiChoiceOptions;
    case 'ja-it':
      return require('./predefinedMultiChoiceOptions/ja-it.ts')
        .predefinedMultiChoiceOptions;
    case 'ja-ja':
      return require('./predefinedMultiChoiceOptions/ja-ja.ts')
        .predefinedMultiChoiceOptions;
    case 'ja-ka':
      return require('./predefinedMultiChoiceOptions/ja-ka.ts')
        .predefinedMultiChoiceOptions;
    case 'ja-kk':
      return require('./predefinedMultiChoiceOptions/ja-kk.ts')
        .predefinedMultiChoiceOptions;
    case 'ja-ko':
      return require('./predefinedMultiChoiceOptions/ja-ko.ts')
        .predefinedMultiChoiceOptions;
    case 'ja-ms':
      return require('./predefinedMultiChoiceOptions/ja-ms.ts')
        .predefinedMultiChoiceOptions;
    case 'ja-nl':
      return require('./predefinedMultiChoiceOptions/ja-nl.ts')
        .predefinedMultiChoiceOptions;
    case 'ja-no':
      return require('./predefinedMultiChoiceOptions/ja-no.ts')
        .predefinedMultiChoiceOptions;
    case 'ja-pl':
      return require('./predefinedMultiChoiceOptions/ja-pl.ts')
        .predefinedMultiChoiceOptions;
    case 'ja-pt':
      return require('./predefinedMultiChoiceOptions/ja-pt.ts')
        .predefinedMultiChoiceOptions;
    case 'ja-ru':
      return require('./predefinedMultiChoiceOptions/ja-ru.ts')
        .predefinedMultiChoiceOptions;
    case 'ja-sv':
      return require('./predefinedMultiChoiceOptions/ja-sv.ts')
        .predefinedMultiChoiceOptions;
    case 'ja-th':
      return require('./predefinedMultiChoiceOptions/ja-th.ts')
        .predefinedMultiChoiceOptions;
    case 'ja-tr':
      return require('./predefinedMultiChoiceOptions/ja-tr.ts')
        .predefinedMultiChoiceOptions;
    case 'ja-uk':
      return require('./predefinedMultiChoiceOptions/ja-uk.ts')
        .predefinedMultiChoiceOptions;
    case 'ja-vi':
      return require('./predefinedMultiChoiceOptions/ja-vi.ts')
        .predefinedMultiChoiceOptions;
    case 'ja-zh':
      return require('./predefinedMultiChoiceOptions/ja-zh.ts')
        .predefinedMultiChoiceOptions;
    case 'ja-zh-TW':
      return require('./predefinedMultiChoiceOptions/ja-zh-TW.ts')
        .predefinedMultiChoiceOptions;
    case 'ko-ar':
      return require('./predefinedMultiChoiceOptions/ko-ar.ts')
        .predefinedMultiChoiceOptions;
    case 'ko-az':
      return require('./predefinedMultiChoiceOptions/ko-az.ts')
        .predefinedMultiChoiceOptions;
    case 'ko-da':
      return require('./predefinedMultiChoiceOptions/ko-da.ts')
        .predefinedMultiChoiceOptions;
    case 'ko-de':
      return require('./predefinedMultiChoiceOptions/ko-de.ts')
        .predefinedMultiChoiceOptions;
    case 'ko-el':
      return require('./predefinedMultiChoiceOptions/ko-el.ts')
        .predefinedMultiChoiceOptions;
    case 'ko-en':
      return require('./predefinedMultiChoiceOptions/ko-en.ts')
        .predefinedMultiChoiceOptions;
    case 'ko-es':
      return require('./predefinedMultiChoiceOptions/ko-es.ts')
        .predefinedMultiChoiceOptions;
    case 'ko-fa':
      return require('./predefinedMultiChoiceOptions/ko-fa.ts')
        .predefinedMultiChoiceOptions;
    case 'ko-fi':
      return require('./predefinedMultiChoiceOptions/ko-fi.ts')
        .predefinedMultiChoiceOptions;
    case 'ko-fr':
      return require('./predefinedMultiChoiceOptions/ko-fr.ts')
        .predefinedMultiChoiceOptions;
    case 'ko-he':
      return require('./predefinedMultiChoiceOptions/ko-he.ts')
        .predefinedMultiChoiceOptions;
    case 'ko-hi':
      return require('./predefinedMultiChoiceOptions/ko-hi.ts')
        .predefinedMultiChoiceOptions;
    case 'ko-hy':
      return require('./predefinedMultiChoiceOptions/ko-hy.ts')
        .predefinedMultiChoiceOptions;
    case 'ko-id':
      return require('./predefinedMultiChoiceOptions/ko-id.ts')
        .predefinedMultiChoiceOptions;
    case 'ko-it':
      return require('./predefinedMultiChoiceOptions/ko-it.ts')
        .predefinedMultiChoiceOptions;
    case 'ko-ja':
      return require('./predefinedMultiChoiceOptions/ko-ja.ts')
        .predefinedMultiChoiceOptions;
    case 'ko-ka':
      return require('./predefinedMultiChoiceOptions/ko-ka.ts')
        .predefinedMultiChoiceOptions;
    case 'ko-kk':
      return require('./predefinedMultiChoiceOptions/ko-kk.ts')
        .predefinedMultiChoiceOptions;
    case 'ko-ko':
      return require('./predefinedMultiChoiceOptions/ko-ko.ts')
        .predefinedMultiChoiceOptions;
    case 'ko-ms':
      return require('./predefinedMultiChoiceOptions/ko-ms.ts')
        .predefinedMultiChoiceOptions;
    case 'ko-nl':
      return require('./predefinedMultiChoiceOptions/ko-nl.ts')
        .predefinedMultiChoiceOptions;
    case 'ko-no':
      return require('./predefinedMultiChoiceOptions/ko-no.ts')
        .predefinedMultiChoiceOptions;
    case 'ko-pl':
      return require('./predefinedMultiChoiceOptions/ko-pl.ts')
        .predefinedMultiChoiceOptions;
    case 'ko-pt':
      return require('./predefinedMultiChoiceOptions/ko-pt.ts')
        .predefinedMultiChoiceOptions;
    case 'ko-ru':
      return require('./predefinedMultiChoiceOptions/ko-ru.ts')
        .predefinedMultiChoiceOptions;
    case 'ko-sv':
      return require('./predefinedMultiChoiceOptions/ko-sv.ts')
        .predefinedMultiChoiceOptions;
    case 'ko-th':
      return require('./predefinedMultiChoiceOptions/ko-th.ts')
        .predefinedMultiChoiceOptions;
    case 'ko-tr':
      return require('./predefinedMultiChoiceOptions/ko-tr.ts')
        .predefinedMultiChoiceOptions;
    case 'ko-uk':
      return require('./predefinedMultiChoiceOptions/ko-uk.ts')
        .predefinedMultiChoiceOptions;
    case 'ko-vi':
      return require('./predefinedMultiChoiceOptions/ko-vi.ts')
        .predefinedMultiChoiceOptions;
    case 'ko-zh':
      return require('./predefinedMultiChoiceOptions/ko-zh.ts')
        .predefinedMultiChoiceOptions;
    case 'ko-zh-TW':
      return require('./predefinedMultiChoiceOptions/ko-zh-TW.ts')
        .predefinedMultiChoiceOptions;
    case 'nl-ar':
      return require('./predefinedMultiChoiceOptions/nl-ar.ts')
        .predefinedMultiChoiceOptions;
    case 'nl-az':
      return require('./predefinedMultiChoiceOptions/nl-az.ts')
        .predefinedMultiChoiceOptions;
    case 'nl-da':
      return require('./predefinedMultiChoiceOptions/nl-da.ts')
        .predefinedMultiChoiceOptions;
    case 'nl-de':
      return require('./predefinedMultiChoiceOptions/nl-de.ts')
        .predefinedMultiChoiceOptions;
    case 'nl-el':
      return require('./predefinedMultiChoiceOptions/nl-el.ts')
        .predefinedMultiChoiceOptions;
    case 'nl-en':
      return require('./predefinedMultiChoiceOptions/nl-en.ts')
        .predefinedMultiChoiceOptions;
    case 'nl-es':
      return require('./predefinedMultiChoiceOptions/nl-es.ts')
        .predefinedMultiChoiceOptions;
    case 'nl-fa':
      return require('./predefinedMultiChoiceOptions/nl-fa.ts')
        .predefinedMultiChoiceOptions;
    case 'nl-fi':
      return require('./predefinedMultiChoiceOptions/nl-fi.ts')
        .predefinedMultiChoiceOptions;
    case 'nl-fr':
      return require('./predefinedMultiChoiceOptions/nl-fr.ts')
        .predefinedMultiChoiceOptions;
    case 'nl-he':
      return require('./predefinedMultiChoiceOptions/nl-he.ts')
        .predefinedMultiChoiceOptions;
    case 'nl-hi':
      return require('./predefinedMultiChoiceOptions/nl-hi.ts')
        .predefinedMultiChoiceOptions;
    case 'nl-hy':
      return require('./predefinedMultiChoiceOptions/nl-hy.ts')
        .predefinedMultiChoiceOptions;
    case 'nl-id':
      return require('./predefinedMultiChoiceOptions/nl-id.ts')
        .predefinedMultiChoiceOptions;
    case 'nl-it':
      return require('./predefinedMultiChoiceOptions/nl-it.ts')
        .predefinedMultiChoiceOptions;
    case 'nl-ja':
      return require('./predefinedMultiChoiceOptions/nl-ja.ts')
        .predefinedMultiChoiceOptions;
    case 'nl-ka':
      return require('./predefinedMultiChoiceOptions/nl-ka.ts')
        .predefinedMultiChoiceOptions;
    case 'nl-kk':
      return require('./predefinedMultiChoiceOptions/nl-kk.ts')
        .predefinedMultiChoiceOptions;
    case 'nl-ko':
      return require('./predefinedMultiChoiceOptions/nl-ko.ts')
        .predefinedMultiChoiceOptions;
    case 'nl-ms':
      return require('./predefinedMultiChoiceOptions/nl-ms.ts')
        .predefinedMultiChoiceOptions;
    case 'nl-nl':
      return require('./predefinedMultiChoiceOptions/nl-nl.ts')
        .predefinedMultiChoiceOptions;
    case 'nl-no':
      return require('./predefinedMultiChoiceOptions/nl-no.ts')
        .predefinedMultiChoiceOptions;
    case 'nl-pl':
      return require('./predefinedMultiChoiceOptions/nl-pl.ts')
        .predefinedMultiChoiceOptions;
    case 'nl-pt':
      return require('./predefinedMultiChoiceOptions/nl-pt.ts')
        .predefinedMultiChoiceOptions;
    case 'nl-ru':
      return require('./predefinedMultiChoiceOptions/nl-ru.ts')
        .predefinedMultiChoiceOptions;
    case 'nl-sv':
      return require('./predefinedMultiChoiceOptions/nl-sv.ts')
        .predefinedMultiChoiceOptions;
    case 'nl-th':
      return require('./predefinedMultiChoiceOptions/nl-th.ts')
        .predefinedMultiChoiceOptions;
    case 'nl-tr':
      return require('./predefinedMultiChoiceOptions/nl-tr.ts')
        .predefinedMultiChoiceOptions;
    case 'nl-uk':
      return require('./predefinedMultiChoiceOptions/nl-uk.ts')
        .predefinedMultiChoiceOptions;
    case 'nl-vi':
      return require('./predefinedMultiChoiceOptions/nl-vi.ts')
        .predefinedMultiChoiceOptions;
    case 'nl-zh':
      return require('./predefinedMultiChoiceOptions/nl-zh.ts')
        .predefinedMultiChoiceOptions;
    case 'nl-zh-TW':
      return require('./predefinedMultiChoiceOptions/nl-zh-TW.ts')
        .predefinedMultiChoiceOptions;
    case 'no-ar':
      return require('./predefinedMultiChoiceOptions/no-ar.ts')
        .predefinedMultiChoiceOptions;
    case 'no-az':
      return require('./predefinedMultiChoiceOptions/no-az.ts')
        .predefinedMultiChoiceOptions;
    case 'no-da':
      return require('./predefinedMultiChoiceOptions/no-da.ts')
        .predefinedMultiChoiceOptions;
    case 'no-de':
      return require('./predefinedMultiChoiceOptions/no-de.ts')
        .predefinedMultiChoiceOptions;
    case 'no-el':
      return require('./predefinedMultiChoiceOptions/no-el.ts')
        .predefinedMultiChoiceOptions;
    case 'no-en':
      return require('./predefinedMultiChoiceOptions/no-en.ts')
        .predefinedMultiChoiceOptions;
    case 'no-es':
      return require('./predefinedMultiChoiceOptions/no-es.ts')
        .predefinedMultiChoiceOptions;
    case 'no-fa':
      return require('./predefinedMultiChoiceOptions/no-fa.ts')
        .predefinedMultiChoiceOptions;
    case 'no-fi':
      return require('./predefinedMultiChoiceOptions/no-fi.ts')
        .predefinedMultiChoiceOptions;
    case 'no-fr':
      return require('./predefinedMultiChoiceOptions/no-fr.ts')
        .predefinedMultiChoiceOptions;
    case 'no-he':
      return require('./predefinedMultiChoiceOptions/no-he.ts')
        .predefinedMultiChoiceOptions;
    case 'no-hi':
      return require('./predefinedMultiChoiceOptions/no-hi.ts')
        .predefinedMultiChoiceOptions;
    case 'no-hy':
      return require('./predefinedMultiChoiceOptions/no-hy.ts')
        .predefinedMultiChoiceOptions;
    case 'no-id':
      return require('./predefinedMultiChoiceOptions/no-id.ts')
        .predefinedMultiChoiceOptions;
    case 'no-it':
      return require('./predefinedMultiChoiceOptions/no-it.ts')
        .predefinedMultiChoiceOptions;
    case 'no-ja':
      return require('./predefinedMultiChoiceOptions/no-ja.ts')
        .predefinedMultiChoiceOptions;
    case 'no-ka':
      return require('./predefinedMultiChoiceOptions/no-ka.ts')
        .predefinedMultiChoiceOptions;
    case 'no-kk':
      return require('./predefinedMultiChoiceOptions/no-kk.ts')
        .predefinedMultiChoiceOptions;
    case 'no-ko':
      return require('./predefinedMultiChoiceOptions/no-ko.ts')
        .predefinedMultiChoiceOptions;
    case 'no-ms':
      return require('./predefinedMultiChoiceOptions/no-ms.ts')
        .predefinedMultiChoiceOptions;
    case 'no-nl':
      return require('./predefinedMultiChoiceOptions/no-nl.ts')
        .predefinedMultiChoiceOptions;
    case 'no-no':
      return require('./predefinedMultiChoiceOptions/no-no.ts')
        .predefinedMultiChoiceOptions;
    case 'no-pl':
      return require('./predefinedMultiChoiceOptions/no-pl.ts')
        .predefinedMultiChoiceOptions;
    case 'no-pt':
      return require('./predefinedMultiChoiceOptions/no-pt.ts')
        .predefinedMultiChoiceOptions;
    case 'no-ru':
      return require('./predefinedMultiChoiceOptions/no-ru.ts')
        .predefinedMultiChoiceOptions;
    case 'no-sv':
      return require('./predefinedMultiChoiceOptions/no-sv.ts')
        .predefinedMultiChoiceOptions;
    case 'no-th':
      return require('./predefinedMultiChoiceOptions/no-th.ts')
        .predefinedMultiChoiceOptions;
    case 'no-tr':
      return require('./predefinedMultiChoiceOptions/no-tr.ts')
        .predefinedMultiChoiceOptions;
    case 'no-uk':
      return require('./predefinedMultiChoiceOptions/no-uk.ts')
        .predefinedMultiChoiceOptions;
    case 'no-vi':
      return require('./predefinedMultiChoiceOptions/no-vi.ts')
        .predefinedMultiChoiceOptions;
    case 'no-zh':
      return require('./predefinedMultiChoiceOptions/no-zh.ts')
        .predefinedMultiChoiceOptions;
    case 'no-zh-TW':
      return require('./predefinedMultiChoiceOptions/no-zh-TW.ts')
        .predefinedMultiChoiceOptions;
    case 'pt-ar':
      return require('./predefinedMultiChoiceOptions/pt-ar.ts')
        .predefinedMultiChoiceOptions;
    case 'pt-az':
      return require('./predefinedMultiChoiceOptions/pt-az.ts')
        .predefinedMultiChoiceOptions;
    case 'pt-da':
      return require('./predefinedMultiChoiceOptions/pt-da.ts')
        .predefinedMultiChoiceOptions;
    case 'pt-de':
      return require('./predefinedMultiChoiceOptions/pt-de.ts')
        .predefinedMultiChoiceOptions;
    case 'pt-el':
      return require('./predefinedMultiChoiceOptions/pt-el.ts')
        .predefinedMultiChoiceOptions;
    case 'pt-en':
      return require('./predefinedMultiChoiceOptions/pt-en.ts')
        .predefinedMultiChoiceOptions;
    case 'pt-es':
      return require('./predefinedMultiChoiceOptions/pt-es.ts')
        .predefinedMultiChoiceOptions;
    case 'pt-fa':
      return require('./predefinedMultiChoiceOptions/pt-fa.ts')
        .predefinedMultiChoiceOptions;
    case 'pt-fi':
      return require('./predefinedMultiChoiceOptions/pt-fi.ts')
        .predefinedMultiChoiceOptions;
    case 'pt-fr':
      return require('./predefinedMultiChoiceOptions/pt-fr.ts')
        .predefinedMultiChoiceOptions;
    case 'pt-he':
      return require('./predefinedMultiChoiceOptions/pt-he.ts')
        .predefinedMultiChoiceOptions;
    case 'pt-hi':
      return require('./predefinedMultiChoiceOptions/pt-hi.ts')
        .predefinedMultiChoiceOptions;
    case 'pt-hy':
      return require('./predefinedMultiChoiceOptions/pt-hy.ts')
        .predefinedMultiChoiceOptions;
    case 'pt-id':
      return require('./predefinedMultiChoiceOptions/pt-id.ts')
        .predefinedMultiChoiceOptions;
    case 'pt-it':
      return require('./predefinedMultiChoiceOptions/pt-it.ts')
        .predefinedMultiChoiceOptions;
    case 'pt-ja':
      return require('./predefinedMultiChoiceOptions/pt-ja.ts')
        .predefinedMultiChoiceOptions;
    case 'pt-ka':
      return require('./predefinedMultiChoiceOptions/pt-ka.ts')
        .predefinedMultiChoiceOptions;
    case 'pt-kk':
      return require('./predefinedMultiChoiceOptions/pt-kk.ts')
        .predefinedMultiChoiceOptions;
    case 'pt-ko':
      return require('./predefinedMultiChoiceOptions/pt-ko.ts')
        .predefinedMultiChoiceOptions;
    case 'pt-ms':
      return require('./predefinedMultiChoiceOptions/pt-ms.ts')
        .predefinedMultiChoiceOptions;
    case 'pt-nl':
      return require('./predefinedMultiChoiceOptions/pt-nl.ts')
        .predefinedMultiChoiceOptions;
    case 'pt-no':
      return require('./predefinedMultiChoiceOptions/pt-no.ts')
        .predefinedMultiChoiceOptions;
    case 'pt-pl':
      return require('./predefinedMultiChoiceOptions/pt-pl.ts')
        .predefinedMultiChoiceOptions;
    case 'pt-pt':
      return require('./predefinedMultiChoiceOptions/pt-pt.ts')
        .predefinedMultiChoiceOptions;
    case 'pt-ru':
      return require('./predefinedMultiChoiceOptions/pt-ru.ts')
        .predefinedMultiChoiceOptions;
    case 'pt-sv':
      return require('./predefinedMultiChoiceOptions/pt-sv.ts')
        .predefinedMultiChoiceOptions;
    case 'pt-th':
      return require('./predefinedMultiChoiceOptions/pt-th.ts')
        .predefinedMultiChoiceOptions;
    case 'pt-tr':
      return require('./predefinedMultiChoiceOptions/pt-tr.ts')
        .predefinedMultiChoiceOptions;
    case 'pt-uk':
      return require('./predefinedMultiChoiceOptions/pt-uk.ts')
        .predefinedMultiChoiceOptions;
    case 'pt-vi':
      return require('./predefinedMultiChoiceOptions/pt-vi.ts')
        .predefinedMultiChoiceOptions;
    case 'pt-zh':
      return require('./predefinedMultiChoiceOptions/pt-zh.ts')
        .predefinedMultiChoiceOptions;
    case 'pt-zh-TW':
      return require('./predefinedMultiChoiceOptions/pt-zh-TW.ts')
        .predefinedMultiChoiceOptions;
    case 'sv-ar':
      return require('./predefinedMultiChoiceOptions/sv-ar.ts')
        .predefinedMultiChoiceOptions;
    case 'sv-az':
      return require('./predefinedMultiChoiceOptions/sv-az.ts')
        .predefinedMultiChoiceOptions;
    case 'sv-da':
      return require('./predefinedMultiChoiceOptions/sv-da.ts')
        .predefinedMultiChoiceOptions;
    case 'sv-de':
      return require('./predefinedMultiChoiceOptions/sv-de.ts')
        .predefinedMultiChoiceOptions;
    case 'sv-el':
      return require('./predefinedMultiChoiceOptions/sv-el.ts')
        .predefinedMultiChoiceOptions;
    case 'sv-en':
      return require('./predefinedMultiChoiceOptions/sv-en.ts')
        .predefinedMultiChoiceOptions;
    case 'sv-es':
      return require('./predefinedMultiChoiceOptions/sv-es.ts')
        .predefinedMultiChoiceOptions;
    case 'sv-fa':
      return require('./predefinedMultiChoiceOptions/sv-fa.ts')
        .predefinedMultiChoiceOptions;
    case 'sv-fi':
      return require('./predefinedMultiChoiceOptions/sv-fi.ts')
        .predefinedMultiChoiceOptions;
    case 'sv-fr':
      return require('./predefinedMultiChoiceOptions/sv-fr.ts')
        .predefinedMultiChoiceOptions;
    case 'sv-he':
      return require('./predefinedMultiChoiceOptions/sv-he.ts')
        .predefinedMultiChoiceOptions;
    case 'sv-hi':
      return require('./predefinedMultiChoiceOptions/sv-hi.ts')
        .predefinedMultiChoiceOptions;
    case 'sv-hy':
      return require('./predefinedMultiChoiceOptions/sv-hy.ts')
        .predefinedMultiChoiceOptions;
    case 'sv-id':
      return require('./predefinedMultiChoiceOptions/sv-id.ts')
        .predefinedMultiChoiceOptions;
    case 'sv-it':
      return require('./predefinedMultiChoiceOptions/sv-it.ts')
        .predefinedMultiChoiceOptions;
    case 'sv-ja':
      return require('./predefinedMultiChoiceOptions/sv-ja.ts')
        .predefinedMultiChoiceOptions;
    case 'sv-ka':
      return require('./predefinedMultiChoiceOptions/sv-ka.ts')
        .predefinedMultiChoiceOptions;
    case 'sv-kk':
      return require('./predefinedMultiChoiceOptions/sv-kk.ts')
        .predefinedMultiChoiceOptions;
    case 'sv-ko':
      return require('./predefinedMultiChoiceOptions/sv-ko.ts')
        .predefinedMultiChoiceOptions;
    case 'sv-ms':
      return require('./predefinedMultiChoiceOptions/sv-ms.ts')
        .predefinedMultiChoiceOptions;
    case 'sv-nl':
      return require('./predefinedMultiChoiceOptions/sv-nl.ts')
        .predefinedMultiChoiceOptions;
    case 'sv-no':
      return require('./predefinedMultiChoiceOptions/sv-no.ts')
        .predefinedMultiChoiceOptions;
    case 'sv-pl':
      return require('./predefinedMultiChoiceOptions/sv-pl.ts')
        .predefinedMultiChoiceOptions;
    case 'sv-pt':
      return require('./predefinedMultiChoiceOptions/sv-pt.ts')
        .predefinedMultiChoiceOptions;
    case 'sv-ru':
      return require('./predefinedMultiChoiceOptions/sv-ru.ts')
        .predefinedMultiChoiceOptions;
    case 'sv-sv':
      return require('./predefinedMultiChoiceOptions/sv-sv.ts')
        .predefinedMultiChoiceOptions;
    case 'sv-th':
      return require('./predefinedMultiChoiceOptions/sv-th.ts')
        .predefinedMultiChoiceOptions;
    case 'sv-tr':
      return require('./predefinedMultiChoiceOptions/sv-tr.ts')
        .predefinedMultiChoiceOptions;
    case 'sv-uk':
      return require('./predefinedMultiChoiceOptions/sv-uk.ts')
        .predefinedMultiChoiceOptions;
    case 'sv-vi':
      return require('./predefinedMultiChoiceOptions/sv-vi.ts')
        .predefinedMultiChoiceOptions;
    case 'sv-zh':
      return require('./predefinedMultiChoiceOptions/sv-zh.ts')
        .predefinedMultiChoiceOptions;
    case 'sv-zh-TW':
      return require('./predefinedMultiChoiceOptions/sv-zh-TW.ts')
        .predefinedMultiChoiceOptions;
    case 'tr-ar':
      return require('./predefinedMultiChoiceOptions/tr-ar.ts')
        .predefinedMultiChoiceOptions;
    case 'tr-az':
      return require('./predefinedMultiChoiceOptions/tr-az.ts')
        .predefinedMultiChoiceOptions;
    case 'tr-da':
      return require('./predefinedMultiChoiceOptions/tr-da.ts')
        .predefinedMultiChoiceOptions;
    case 'tr-de':
      return require('./predefinedMultiChoiceOptions/tr-de.ts')
        .predefinedMultiChoiceOptions;
    case 'tr-el':
      return require('./predefinedMultiChoiceOptions/tr-el.ts')
        .predefinedMultiChoiceOptions;
    case 'tr-en':
      return require('./predefinedMultiChoiceOptions/tr-en.ts')
        .predefinedMultiChoiceOptions;
    case 'tr-es':
      return require('./predefinedMultiChoiceOptions/tr-es.ts')
        .predefinedMultiChoiceOptions;
    case 'tr-fa':
      return require('./predefinedMultiChoiceOptions/tr-fa.ts')
        .predefinedMultiChoiceOptions;
    case 'tr-fi':
      return require('./predefinedMultiChoiceOptions/tr-fi.ts')
        .predefinedMultiChoiceOptions;
    case 'tr-fr':
      return require('./predefinedMultiChoiceOptions/tr-fr.ts')
        .predefinedMultiChoiceOptions;
    case 'tr-he':
      return require('./predefinedMultiChoiceOptions/tr-he.ts')
        .predefinedMultiChoiceOptions;
    case 'tr-hi':
      return require('./predefinedMultiChoiceOptions/tr-hi.ts')
        .predefinedMultiChoiceOptions;
    case 'tr-hy':
      return require('./predefinedMultiChoiceOptions/tr-hy.ts')
        .predefinedMultiChoiceOptions;
    case 'tr-id':
      return require('./predefinedMultiChoiceOptions/tr-id.ts')
        .predefinedMultiChoiceOptions;
    case 'tr-it':
      return require('./predefinedMultiChoiceOptions/tr-it.ts')
        .predefinedMultiChoiceOptions;
    case 'tr-ja':
      return require('./predefinedMultiChoiceOptions/tr-ja.ts')
        .predefinedMultiChoiceOptions;
    case 'tr-ka':
      return require('./predefinedMultiChoiceOptions/tr-ka.ts')
        .predefinedMultiChoiceOptions;
    case 'tr-kk':
      return require('./predefinedMultiChoiceOptions/tr-kk.ts')
        .predefinedMultiChoiceOptions;
    case 'tr-ko':
      return require('./predefinedMultiChoiceOptions/tr-ko.ts')
        .predefinedMultiChoiceOptions;
    case 'tr-ms':
      return require('./predefinedMultiChoiceOptions/tr-ms.ts')
        .predefinedMultiChoiceOptions;
    case 'tr-nl':
      return require('./predefinedMultiChoiceOptions/tr-nl.ts')
        .predefinedMultiChoiceOptions;
    case 'tr-no':
      return require('./predefinedMultiChoiceOptions/tr-no.ts')
        .predefinedMultiChoiceOptions;
    case 'tr-pl':
      return require('./predefinedMultiChoiceOptions/tr-pl.ts')
        .predefinedMultiChoiceOptions;
    case 'tr-pt':
      return require('./predefinedMultiChoiceOptions/tr-pt.ts')
        .predefinedMultiChoiceOptions;
    case 'tr-ru':
      return require('./predefinedMultiChoiceOptions/tr-ru.ts')
        .predefinedMultiChoiceOptions;
    case 'tr-sv':
      return require('./predefinedMultiChoiceOptions/tr-sv.ts')
        .predefinedMultiChoiceOptions;
    case 'tr-th':
      return require('./predefinedMultiChoiceOptions/tr-th.ts')
        .predefinedMultiChoiceOptions;
    case 'tr-tr':
      return require('./predefinedMultiChoiceOptions/tr-tr.ts')
        .predefinedMultiChoiceOptions;
    case 'tr-uk':
      return require('./predefinedMultiChoiceOptions/tr-uk.ts')
        .predefinedMultiChoiceOptions;
    case 'tr-vi':
      return require('./predefinedMultiChoiceOptions/tr-vi.ts')
        .predefinedMultiChoiceOptions;
    case 'tr-zh':
      return require('./predefinedMultiChoiceOptions/tr-zh.ts')
        .predefinedMultiChoiceOptions;
    case 'tr-zh-TW':
      return require('./predefinedMultiChoiceOptions/tr-zh-TW.ts')
        .predefinedMultiChoiceOptions;
    case 'zh-ar':
      return require('./predefinedMultiChoiceOptions/zh-ar.ts')
        .predefinedMultiChoiceOptions;
    case 'zh-az':
      return require('./predefinedMultiChoiceOptions/zh-az.ts')
        .predefinedMultiChoiceOptions;
    case 'zh-da':
      return require('./predefinedMultiChoiceOptions/zh-da.ts')
        .predefinedMultiChoiceOptions;
    case 'zh-de':
      return require('./predefinedMultiChoiceOptions/zh-de.ts')
        .predefinedMultiChoiceOptions;
    case 'zh-el':
      return require('./predefinedMultiChoiceOptions/zh-el.ts')
        .predefinedMultiChoiceOptions;
    case 'zh-en':
      return require('./predefinedMultiChoiceOptions/zh-en.ts')
        .predefinedMultiChoiceOptions;
    case 'zh-es':
      return require('./predefinedMultiChoiceOptions/zh-es.ts')
        .predefinedMultiChoiceOptions;
    case 'zh-fa':
      return require('./predefinedMultiChoiceOptions/zh-fa.ts')
        .predefinedMultiChoiceOptions;
    case 'zh-fi':
      return require('./predefinedMultiChoiceOptions/zh-fi.ts')
        .predefinedMultiChoiceOptions;
    case 'zh-fr':
      return require('./predefinedMultiChoiceOptions/zh-fr.ts')
        .predefinedMultiChoiceOptions;
    case 'zh-he':
      return require('./predefinedMultiChoiceOptions/zh-he.ts')
        .predefinedMultiChoiceOptions;
    case 'zh-hi':
      return require('./predefinedMultiChoiceOptions/zh-hi.ts')
        .predefinedMultiChoiceOptions;
    case 'zh-hy':
      return require('./predefinedMultiChoiceOptions/zh-hy.ts')
        .predefinedMultiChoiceOptions;
    case 'zh-id':
      return require('./predefinedMultiChoiceOptions/zh-id.ts')
        .predefinedMultiChoiceOptions;
    case 'zh-it':
      return require('./predefinedMultiChoiceOptions/zh-it.ts')
        .predefinedMultiChoiceOptions;
    case 'zh-ja':
      return require('./predefinedMultiChoiceOptions/zh-ja.ts')
        .predefinedMultiChoiceOptions;
    case 'zh-ka':
      return require('./predefinedMultiChoiceOptions/zh-ka.ts')
        .predefinedMultiChoiceOptions;
    case 'zh-kk':
      return require('./predefinedMultiChoiceOptions/zh-kk.ts')
        .predefinedMultiChoiceOptions;
    case 'zh-ko':
      return require('./predefinedMultiChoiceOptions/zh-ko.ts')
        .predefinedMultiChoiceOptions;
    case 'zh-ms':
      return require('./predefinedMultiChoiceOptions/zh-ms.ts')
        .predefinedMultiChoiceOptions;
    case 'zh-nl':
      return require('./predefinedMultiChoiceOptions/zh-nl.ts')
        .predefinedMultiChoiceOptions;
    case 'zh-no':
      return require('./predefinedMultiChoiceOptions/zh-no.ts')
        .predefinedMultiChoiceOptions;
    case 'zh-pl':
      return require('./predefinedMultiChoiceOptions/zh-pl.ts')
        .predefinedMultiChoiceOptions;
    case 'zh-pt':
      return require('./predefinedMultiChoiceOptions/zh-pt.ts')
        .predefinedMultiChoiceOptions;
    case 'zh-ru':
      return require('./predefinedMultiChoiceOptions/zh-ru.ts')
        .predefinedMultiChoiceOptions;
    case 'zh-sv':
      return require('./predefinedMultiChoiceOptions/zh-sv.ts')
        .predefinedMultiChoiceOptions;
    case 'zh-th':
      return require('./predefinedMultiChoiceOptions/zh-th.ts')
        .predefinedMultiChoiceOptions;
    case 'zh-tr':
      return require('./predefinedMultiChoiceOptions/zh-tr.ts')
        .predefinedMultiChoiceOptions;
    case 'zh-TW-ar':
      return require('./predefinedMultiChoiceOptions/zh-TW-ar.ts')
        .predefinedMultiChoiceOptions;
    case 'zh-TW-az':
      return require('./predefinedMultiChoiceOptions/zh-TW-az.ts')
        .predefinedMultiChoiceOptions;
    case 'zh-TW-da':
      return require('./predefinedMultiChoiceOptions/zh-TW-da.ts')
        .predefinedMultiChoiceOptions;
    case 'zh-TW-de':
      return require('./predefinedMultiChoiceOptions/zh-TW-de.ts')
        .predefinedMultiChoiceOptions;
    case 'zh-TW-el':
      return require('./predefinedMultiChoiceOptions/zh-TW-el.ts')
        .predefinedMultiChoiceOptions;
    case 'zh-TW-en':
      return require('./predefinedMultiChoiceOptions/zh-TW-en.ts')
        .predefinedMultiChoiceOptions;
    case 'zh-TW-es':
      return require('./predefinedMultiChoiceOptions/zh-TW-es.ts')
        .predefinedMultiChoiceOptions;
    case 'zh-TW-fa':
      return require('./predefinedMultiChoiceOptions/zh-TW-fa.ts')
        .predefinedMultiChoiceOptions;
    case 'zh-TW-fi':
      return require('./predefinedMultiChoiceOptions/zh-TW-fi.ts')
        .predefinedMultiChoiceOptions;
    case 'zh-TW-fr':
      return require('./predefinedMultiChoiceOptions/zh-TW-fr.ts')
        .predefinedMultiChoiceOptions;
    case 'zh-TW-he':
      return require('./predefinedMultiChoiceOptions/zh-TW-he.ts')
        .predefinedMultiChoiceOptions;
    case 'zh-TW-hi':
      return require('./predefinedMultiChoiceOptions/zh-TW-hi.ts')
        .predefinedMultiChoiceOptions;
    case 'zh-TW-hy':
      return require('./predefinedMultiChoiceOptions/zh-TW-hy.ts')
        .predefinedMultiChoiceOptions;
    case 'zh-TW-id':
      return require('./predefinedMultiChoiceOptions/zh-TW-id.ts')
        .predefinedMultiChoiceOptions;
    case 'zh-TW-it':
      return require('./predefinedMultiChoiceOptions/zh-TW-it.ts')
        .predefinedMultiChoiceOptions;
    case 'zh-TW-ja':
      return require('./predefinedMultiChoiceOptions/zh-TW-ja.ts')
        .predefinedMultiChoiceOptions;
    case 'zh-TW-ka':
      return require('./predefinedMultiChoiceOptions/zh-TW-ka.ts')
        .predefinedMultiChoiceOptions;
    case 'zh-TW-kk':
      return require('./predefinedMultiChoiceOptions/zh-TW-kk.ts')
        .predefinedMultiChoiceOptions;
    case 'zh-TW-ko':
      return require('./predefinedMultiChoiceOptions/zh-TW-ko.ts')
        .predefinedMultiChoiceOptions;
    case 'zh-TW-ms':
      return require('./predefinedMultiChoiceOptions/zh-TW-ms.ts')
        .predefinedMultiChoiceOptions;
    case 'zh-TW-nl':
      return require('./predefinedMultiChoiceOptions/zh-TW-nl.ts')
        .predefinedMultiChoiceOptions;
    case 'zh-TW-no':
      return require('./predefinedMultiChoiceOptions/zh-TW-no.ts')
        .predefinedMultiChoiceOptions;
    case 'zh-TW-pl':
      return require('./predefinedMultiChoiceOptions/zh-TW-pl.ts')
        .predefinedMultiChoiceOptions;
    case 'zh-TW-pt':
      return require('./predefinedMultiChoiceOptions/zh-TW-pt.ts')
        .predefinedMultiChoiceOptions;
    case 'zh-TW-ru':
      return require('./predefinedMultiChoiceOptions/zh-TW-ru.ts')
        .predefinedMultiChoiceOptions;
    case 'zh-TW-sv':
      return require('./predefinedMultiChoiceOptions/zh-TW-sv.ts')
        .predefinedMultiChoiceOptions;
    case 'zh-TW-th':
      return require('./predefinedMultiChoiceOptions/zh-TW-th.ts')
        .predefinedMultiChoiceOptions;
    case 'zh-TW-tr':
      return require('./predefinedMultiChoiceOptions/zh-TW-tr.ts')
        .predefinedMultiChoiceOptions;
    case 'zh-TW-uk':
      return require('./predefinedMultiChoiceOptions/zh-TW-uk.ts')
        .predefinedMultiChoiceOptions;
    case 'zh-TW-vi':
      return require('./predefinedMultiChoiceOptions/zh-TW-vi.ts')
        .predefinedMultiChoiceOptions;
    case 'zh-TW-zh':
      return require('./predefinedMultiChoiceOptions/zh-TW-zh.ts')
        .predefinedMultiChoiceOptions;
    case 'zh-TW-zh-TW':
      return require('./predefinedMultiChoiceOptions/zh-TW-zh-TW.ts')
        .predefinedMultiChoiceOptions;
    case 'zh-uk':
      return require('./predefinedMultiChoiceOptions/zh-uk.ts')
        .predefinedMultiChoiceOptions;
    case 'zh-vi':
      return require('./predefinedMultiChoiceOptions/zh-vi.ts')
        .predefinedMultiChoiceOptions;
    case 'zh-zh':
      return require('./predefinedMultiChoiceOptions/zh-zh.ts')
        .predefinedMultiChoiceOptions;
    case 'zh-zh-TW':
      return require('./predefinedMultiChoiceOptions/zh-zh-TW.ts')
        .predefinedMultiChoiceOptions;
  }

  return [];
};

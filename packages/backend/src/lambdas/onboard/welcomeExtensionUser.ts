import { Result } from '@vocably/model';
import { send } from './brevo';

const templates = {
  ru: 5,
  uk: 8,
};

const defaultTemplate = 2;

export const welcomeExtensionUser = async (
  email: string,
  language: string
): Promise<Result<any>> => {
  return send({
    email,
    templateId: templates[language] ?? defaultTemplate,
  });
};

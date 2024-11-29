import { Result } from '@vocably/model';
import { send } from './brevo';

const templates = {
  ru: 6,
  uk: 10,
};

const defaultTemplate = 4;

export const mobileAppInstalled = async (
  email: string,
  language: string
): Promise<Result<any>> => {
  return send({
    email,
    templateId: templates[language] ?? defaultTemplate,
  });
};

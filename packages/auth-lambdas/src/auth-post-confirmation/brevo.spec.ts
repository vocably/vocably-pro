import { addContact, sendWelcomeEmail } from './brevo';

describe('brevo', () => {
  if (process.env.TEST_SKIP_SPEC === 'true') {
    it('skip spec testing', () => {});
    return;
  }

  describe('addContact', () => {
    it('should add contact', async () => {
      const result = await addContact({
        email: 'dmytro@sneas.io',
      });

      console.log(result);
    });
  });

  describe('sendWelcomeEmail', () => {
    it('should send a welcome email', async () => {
      const result = await sendWelcomeEmail({
        email: 'dmytro@sneas.io',
      });

      console.log(result);
    });
  });
});

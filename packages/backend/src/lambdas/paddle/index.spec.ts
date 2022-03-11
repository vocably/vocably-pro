import { paddle } from './index';
import { APIGatewayProxyEvent } from 'aws-lambda';
import { inspect } from '../../utils/inspect';

// @ts-ignore
let mockEvent: APIGatewayProxyEvent = {};

describe('integration check for paddle lambda', () => {
  if (process.env.TEST_SKIP_SPEC === 'true') {
    it('skip spec testing', () => {});
    return;
  }

  it('execute paddle lambda', async () => {
    mockEvent.body =
      'alert_id=315287939&alert_name=subscription_created&cancel_url=https%3A%2F%2Fsandbox-checkout.paddle.com%2Fsubscription%2Fcancel%3Fuser%3D8%26subscription%3D5%26hash%3D50e59208003239cd4c6d1cde49e37f45d4832344&checkout_id=2-99471212893e01c-857ecfa5bb&currency=EUR&email=handerson%40example.com&event_time=2022-03-11+10%3A58%3A56&linked_subscriptions=1%2C+2%2C+4&marketing_consent=&next_bill_date=2022-03-19&passthrough=%7B%22sub%22%3A%221c139387-2bb9-45b5-adb8-40659b64981%22%7D&quantity=89&source=Checkout&status=trialing&subscription_id=9&subscription_plan_id=9&unit_price=unit_price&update_url=https%3A%2F%2Fsandbox-checkout.paddle.com%2Fsubscription%2Fupdate%3Fuser%3D6%26subscription%3D2%26hash%3Dd0b32d5201411bd125127ef7fac9830b50ea4fb2&user_id=5&p_signature=l1N5%2Fwagk8e3QOxiUgT8NY8jtlpbkVOQsAugX%2B3oL9l9tb1Es2KnxfpqI%2Bwl5nZLYC5221%2B7lBq0rvSUDemzMwxWfmgA1xhMssomxGl3gZJXtA1ayO%2FfjhitIn9gR86CZsFzNfHN03pItRt95wA7ftln60JleIiEFjMhWodoQiXrhOq3%2FKlaB1Tw8pi3Y612i2FnbbVXcCfecuYM%2FHNyKEgHR3hHGklCi3Uzy147LlFI%2BWG9cWVnshhPJG1xb6YQF1Lu4IVp9uk%2FYzNRbTjSrqEIDHWuoF2%2BCzZ%2BX4zrKWMx2eV6y7pzDCfLWSudsL49bfIaQKg7yH4SWq9S5s5nZBIV1eh%2FyTUTWlhS7zqeUnIMAv6rB0aCg1BiOhwTeStjycb0dPKwxpfL3gG8w7tA7lXepswxruq6TmcqkBhebUuPMGG9yXUrj476axg9MVcyqrAyf4VSwrchqJLJpZz91a9j7yI4EXbtzoLFrfuRbUCLx0fsQkcasdgHAacqihOMQ84jIshS3IWugLVjivinh9%2BbCKsgF6NrFsdsNsERf5q5nFrGyPQgAwTplzVdBP%2B3lCqqMWlz1K6ndXGTXNirurkCIZDZtEHZXd8%2BZhLX9BG4LCdPQ127V69MEmI5nVvaV%2BUB5euyhJmybYRczrzMwicbAvLsRb67yTXMdRFzwDc%3D';
    const result = await paddle(mockEvent);
    console.log(inspect({ result }));
    expect(result.statusCode).toEqual(200);
  });
});

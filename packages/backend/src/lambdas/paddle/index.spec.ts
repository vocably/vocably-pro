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

  it('execute subscription created event', async () => {
    mockEvent.body =
      'alert_id=2038204375&alert_name=subscription_created&cancel_url=https%3A%2F%2Fsandbox-checkout.paddle.com%2Fsubscription%2Fcancel%3Fuser%3D6%26subscription%3D5%26hash%3D68f568da3ec8b6038ead6451bdc5ba74f857aa68&checkout_id=9-16a0cb9a4bdda75-d410237797&currency=USD&email=xbuckridge%40example.org&event_time=2022-03-14+09%3A03%3A31&linked_subscriptions=4%2C+2%2C+4&marketing_consent=&next_bill_date=2022-04-08&passthrough=%7B%22username%22%3A%22test_dev%22%7D&quantity=36&source=Activation&status=active&subscription_id=2&subscription_plan_id=7&unit_price=unit_price&update_url=https%3A%2F%2Fsandbox-checkout.paddle.com%2Fsubscription%2Fupdate%3Fuser%3D3%26subscription%3D4%26hash%3Dd3f2612b38d02f58d0771711aafe6b214f4f8d67&user_id=2&p_signature=M6Uh3vyNXxTPVHC2GixT%2BPx%2FOV1NtnxQk%2B%2FPbk3BSsFLDiM9VimygKuIL%2B4IypNj4MLwOKq9apZT%2B1z5ZyDkfr6JQlFbSfxCdBlwtNi3IbSELR3u9TFTBy1ozo7AtPs9Csxo3k9AaoRMHtuHSDt51In6PDoW1D6k1SwrMFCr00pduibhUBI6HZcXc8%2ByPISHMVfRf4t7ZuFh7YknrEjJUXWmQyCUFpp%2FpeynvnTBBTBKm2i9Zq0pHQlIv044Iy%2FQ9XY69AeSvi1Gw9Iwj0XuNTAZrZCRQbwSPB7U4uRf1w5%2BBG1gRr%2FB2gONpeZy%2FS1bLTMzfVeH6cz2vleYzJhlOEScGPlZ2gnp6HapCROKi5t%2B5oONb%2FvsUVyToiRP3S2YBCJu3Dyppq6MpqXa10TGoFlUla3Uw1K7Mu5oxVcg95zdnr0s3cZNJ14wwQGB%2BK00nrJ%2Bx6Y1xgGhKZW4FOue7m4i7hR8MDILVcOG0i0kB18%2Bf5Ho3oDJep6m82AdkMcaQZQbDvW6Xy8NPtJDmQdRlZS0eXEwKElMPJhdBaVmoieaT4NUtEonbVYss5KJpq%2BRDC%2BcsYkyWXBSgfJcplgaEzSM6W53dMhw%2BJtD60D9c2ROW2cM1l26UfTVKXssTwWYIo%2FBB9xSzwDnkBjz%2FWaENBAMjmxvR1QaU%2BrDn5hYMjM%3D';

    const result = await paddle(mockEvent);
    console.log(inspect({ result }));
    expect(result.statusCode).toEqual(200);
  });
});

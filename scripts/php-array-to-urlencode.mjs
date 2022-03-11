import { URLSearchParams } from 'url';

const phpArray = `(
    [alert_id] => 315287939
    [alert_name] => subscription_created
    [cancel_url] => https://sandbox-checkout.paddle.com/subscription/cancel?user=8&subscription=5&hash=50e59208003239cd4c6d1cde49e37f45d4832344
    [checkout_id] => 2-99471212893e01c-857ecfa5bb
    [currency] => EUR
    [email] => handerson@example.com
    [event_time] => 2022-03-11 10:58:56
    [linked_subscriptions] => 1, 2, 4
    [marketing_consent] =>
    [next_bill_date] => 2022-03-19
    [passthrough] => {"sub":"1c139387-2bb9-45b5-adb8-40659b64981"}
    [quantity] => 89
    [source] => Checkout
    [status] => trialing
    [subscription_id] => 9
    [subscription_plan_id] => 9
    [unit_price] => unit_price
    [update_url] => https://sandbox-checkout.paddle.com/subscription/update?user=6&subscription=2&hash=d0b32d5201411bd125127ef7fac9830b50ea4fb2
    [user_id] => 5
    [p_signature] => l1N5/wagk8e3QOxiUgT8NY8jtlpbkVOQsAugX+3oL9l9tb1Es2KnxfpqI+wl5nZLYC5221+7lBq0rvSUDemzMwxWfmgA1xhMssomxGl3gZJXtA1ayO/fjhitIn9gR86CZsFzNfHN03pItRt95wA7ftln60JleIiEFjMhWodoQiXrhOq3/KlaB1Tw8pi3Y612i2FnbbVXcCfecuYM/HNyKEgHR3hHGklCi3Uzy147LlFI+WG9cWVnshhPJG1xb6YQF1Lu4IVp9uk/YzNRbTjSrqEIDHWuoF2+CzZ+X4zrKWMx2eV6y7pzDCfLWSudsL49bfIaQKg7yH4SWq9S5s5nZBIV1eh/yTUTWlhS7zqeUnIMAv6rB0aCg1BiOhwTeStjycb0dPKwxpfL3gG8w7tA7lXepswxruq6TmcqkBhebUuPMGG9yXUrj476axg9MVcyqrAyf4VSwrchqJLJpZz91a9j7yI4EXbtzoLFrfuRbUCLx0fsQkcasdgHAacqihOMQ84jIshS3IWugLVjivinh9+bCKsgF6NrFsdsNsERf5q5nFrGyPQgAwTplzVdBP+3lCqqMWlz1K6ndXGTXNirurkCIZDZtEHZXd8+ZhLX9BG4LCdPQ127V69MEmI5nVvaV+UB5euyhJmybYRczrzMwicbAvLsRb67yTXMdRFzwDc=
)`;

const form = new URLSearchParams(
  Object.fromEntries(
    [...phpArray.matchAll(/\[(.+)] => ?(.*)/gm)].map((values) => [
      values[1],
      values[2],
    ])
  )
);

console.log(form.toString());

import { browserEnv } from './browserEnv';

export const stayAlive = () => {
  console.log(
    `-------- >>> ${convertNoDate(
      Date.now()
    )} UTC - Service Worker with HIGHLANDER: waiting to be awakened <<< --------`
  );

  const INTERNAL_TESTALIVE_PORT = 'CT_Internal_alive_test';
  const INTERNAL_TESTAWAKE_PORT = 'CT_Internal_awake_test';

  //const startSeconds = 1;
  const nextSeconds = 25;
  const SECONDS = 1000;

  let alivePort = null;
  let isFirstStart = true;
  let isAlreadyAwake = false;
  let timer;
  let firstCall;
  let lastCall = Date.now();
  let wakeup;

  // HIGHLANDER
  async function Highlander() {
    const now = Date.now();
    const age = now - firstCall;
    lastCall = now;

    console.log(
      `(DEBUG Highlander) ------< ROUND >------ time elapsed from first start: ${convertNoDate(
        age
      )}`
    );
    if (alivePort == null) {
      alivePort = browserEnv.runtime.connect({ name: INTERNAL_TESTALIVE_PORT });

      alivePort.onDisconnect.addListener((p) => {
        if (browserEnv.runtime.lastError) {
          //console.log(`(DEBUG Highlander) Expected disconnect error. ServiceWorker status should be still RUNNING.`);
        } else {
          console.log(`(DEBUG Highlander): port disconnected`);
        }

        alivePort = null;
      });
    }

    if (alivePort) {
      alivePort.postMessage({ content: 'ping' });

      if (browserEnv.runtime.lastError) {
        console.log(
          `(DEBUG Highlander): postMessage error: ${browserEnv.runtime.lastError.message}`
        );
      } else {
        //console.log(`(DEBUG Highlander): "ping" sent through ${alivePort.name} port`)
      }
    }

    setTimeout(() => {
      nextRound();
    }, 100);
  }

  function convertNoDate(long) {
    console.log('long', long);
    let dt = new Date(long).toISOString();
    return dt.slice(-13, -5); // HH:MM:SS only
  }

  function nextRound() {
    if (isFirstStart) {
      isFirstStart = false;
      clearInterval(wakeup);
      timer = nextSeconds * SECONDS;
      wakeup = setInterval(Highlander, timer);
    }
    console.log(
      `(DEBUG Highlander): Next round in ${nextSeconds} seconds to maintain Service Worker alive`
    );
  }

  // --------------------------------------------------------------------------------------
  // Local pump on port INTERNAL_TESTAWAKE_PORT.
  // Content scripts attempts to awake this Service Worker.
  // --------------------------------------------------------------------------------------
  browserEnv.runtime.onConnect.addListener((port) => {
    if (port.name !== INTERNAL_TESTAWAKE_PORT) return;

    console.log(
      `>>>>> Connection from script at ${convertNoDate(Date.now())} <<<<<`
    );

    if (isAlreadyAwake == false) {
      // Starts Highlander
      isAlreadyAwake = true;
      firstCall = Date.now();
      //timer = startSeconds*SECONDS;
      timer = 300;
      isFirstStart = true;
      wakeup = setInterval(Highlander, timer);
      console.log(
        `-------- >>> Highlander has been started at ${convertNoDate(
          Date.now()
        )}`
      );
    } else {
      const next = nextSeconds * SECONDS - (Date.now() - lastCall);
      console.log(
        `***** Highlander is already running. Next ROUND in ${convertNoDate(
          next
        )} ( ${(next / 1000) | 0} seconds )`
      );
    }

    port.onDisconnect.addListener((port) => {
      console.log('Script asked to disconnect');
    });

    port.onMessage.addListener((msg) => {
      console.log(`Message from script: ${msg}`);
    });

    // Disconnect the port connected with content script.
    // Connection is useless as Service Worker will continue to stay awake because of running Highlander function.
    setTimeout(swDisconnect, 1000, port);
  });

  function swDisconnect(port) {
    port.disconnect();
  }
};

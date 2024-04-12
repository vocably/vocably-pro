import { browserEnv } from './browserEnv';

let port;
const INTERNAL_TESTAWAKE_PORT = 'CT_Internal_awake_test';

// ---------------------------------------------------------------------------
// Waking up the ServiceWorker
// ---------------------------------------------------------------------------
export const awakeServiceWorker = () => {
  port = browserEnv.runtime.connect({ name: INTERNAL_TESTAWAKE_PORT });

  port.onDisconnect.addListener((port) => {});

  port.onMessage.addListener((msg) => {});
};

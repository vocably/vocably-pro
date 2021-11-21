import { registerContentScript } from '@vocably/extension-content-script';
import { isLoggedIn } from '@vocably/extension-messages';

registerContentScript({ isLoggedIn }).then();

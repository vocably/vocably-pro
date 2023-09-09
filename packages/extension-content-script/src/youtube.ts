import { Result } from '@vocably/model';
import { isHtmlElement } from './isHtmlElement';
import { createPopup } from './popup';
import { extractTokens } from './tokenizer/extractTokens';

export const getPlayerElement = async (): Promise<Result<HTMLElement>> => {
  for (let i = 0; i < 10; i++) {
    const player = document.querySelector('ytd-player');
    if (isHtmlElement(player)) {
      return { success: true, value: player };
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  return {
    success: false,
    errorCode: 'YOUTUBE_PLAYER_NOT_FOUND',
    reason: 'Could not find the YouTube player',
  };
};

export type InitYouTubeOptions = {
  ytHosts: string[];
};

export const initYoutube = async (options: InitYouTubeOptions) => {
  if (!options.ytHosts.includes(window.location.host)) {
    return;
  }

  const playerResult = await getPlayerElement();

  if (playerResult.success === false) {
    return;
  }

  const player = playerResult.value;

  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type !== 'childList') return;
      if (!mutation.target) return;
      if (!isHtmlElement(mutation.target)) return;
      if (!mutation.target.classList) return;
      if (!mutation.target.classList.contains('ytp-caption-segment')) return;

      mutation.addedNodes.forEach((node) => {
        if (isHtmlElement(node) && node.classList.contains('replaced')) return;

        const tokens = extractTokens(node.textContent);

        if (tokens === false) {
          return;
        }

        const fontSize = (node.parentNode as any).style.fontSize;

        const span = document.createElement('span');
        span.classList.add('replaced');
        span.style.fontSize = '0';

        tokens.forEach((token, index) => {
          if (token.type !== 'word') {
            const punctuationSpan = document.createElement('span');
            punctuationSpan.innerText = token.text;
            punctuationSpan.style.fontSize = fontSize;
            span.append(punctuationSpan);
            return;
          }

          const anchor = document.createElement('span');
          anchor.style.fontSize = fontSize;
          anchor.classList.add('vocably-word');
          anchor.innerText = token.text;
          (anchor as any).role = 'button';
          anchor.addEventListener('click', async () => {
            await createPopup(anchor);
          });

          if (index > 0) {
            span.appendChild(document.createTextNode(' '));
          }

          span.append(anchor);
        });

        if ((node as any).parentNode) {
          const captionWindow = (node as any).parentNode.closest(
            '.caption-window'
          );
          captionWindow.removeAttribute('tabindex');
        }

        if ((node as any).replaceWith) {
          (node as any).replaceWith(span);
        }
      });
    });
  });

  observer.observe(player, {
    attributes: false,
    childList: true,
    subtree: true,
  });
};

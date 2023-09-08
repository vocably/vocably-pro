import { Result } from '@vocably/model';
import { isHtmlElement } from './isHtmlElement';
import { createPopup } from './popup';

export const getPlayerElement = async (): Promise<Result<HTMLElement>> => {
  for (let i = 0; i < 10; i++) {
    const player = document.getElementById('ytd-player');
    if (player) {
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

        const words = node.textContent.split(' ');
        const span = document.createElement('span');
        span.classList.add('replaced');

        words.forEach((word, index) => {
          const anchor = document.createElement('span');
          anchor.classList.add('vocably-word');
          anchor.innerText = word;
          (anchor as any).role = 'button';
          anchor.addEventListener('click', async () => {
            await createPopup(anchor);
          });

          if (index > 0) {
            span.appendChild(document.createTextNode(' '));
          }

          span.appendChild(anchor);
        });

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

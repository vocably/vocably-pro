type Piwik = {
  push: (data: string[]) => void;
};

export const getPiwik = (): Piwik => {
  return (
    // @ts-ignore
    window['_paq'] ?? {
      push: () => null,
    }
  );
};

export const setUserId = (userId: string) => {
  getPiwik().push(['setUserId', userId]);
  getPiwik().push(['ping']);
};

export const setUp = (id: string) => {
  (function (window, document, dataLayerName, id) {
    // @ts-ignore
    (window[dataLayerName] = window[dataLayerName] || []),
      // @ts-ignore
      window[dataLayerName].push({
        start: new Date().getTime(),
        event: 'stg.start',
      });
    var scripts = document.getElementsByTagName('script')[0],
      tags = document.createElement('script');
    // @ts-ignore
    function stgCreateCookie(a, b, c) {
      var d = '';
      if (c) {
        var e = new Date();
        e.setTime(e.getTime() + 24 * c * 60 * 60 * 1e3),
          (d = '; expires=' + e.toUTCString());
      }
      document.cookie = a + '=' + b + d + '; path=/';
    }
    var isStgDebug =
      (window.location.href.match('stg_debug') ||
        document.cookie.match('stg_debug')) &&
      !window.location.href.match('stg_disable_debug');
    stgCreateCookie('stg_debug', isStgDebug ? 1 : '', isStgDebug ? 14 : -1);
    var qP = [];
    dataLayerName !== 'dataLayer' &&
      qP.push('data_layer_name=' + dataLayerName),
      isStgDebug && qP.push('stg_debug');
    var qPString = qP.length > 0 ? '?' + qP.join('&') : '';
    (tags.async = !0),
      (tags.src =
        'https://vocably.containers.piwik.pro/' + id + '.js' + qPString),
      // @ts-ignore
      scripts.parentNode.insertBefore(tags, scripts);
    // @ts-ignore
    !(function (a, n, i) {
      // @ts-ignore
      a[n] = a[n] || {};
      for (var c = 0; c < i.length; c++)
        // @ts-ignore
        !(function (i) {
          // @ts-ignore
          (a[n][i] = a[n][i] || {}),
            // @ts-ignore
            (a[n][i].api =
              // @ts-ignore
              a[n][i].api ||
              function () {
                var a = [].slice.call(arguments, 0);
                'string' == typeof a[0] &&
                  // @ts-ignore
                  window[dataLayerName].push({
                    event: n + '.' + i + ':' + a[0],
                    parameters: [].slice.call(arguments, 1),
                  });
              });
        })(i[c]);
    })(window, 'ppms', ['tm', 'cm']);
  })(window, document, 'dataLayer', id);
};

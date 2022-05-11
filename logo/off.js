const html = `<!DOCTYPE html>
<html>

<head>
  <!--[ Meta Tags ]-->
  <title>Kiraky Blog - You're Offline!</title>
  <meta charset='UTF-8'/>
  <meta content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0' name='viewport'/>
  <meta content='IE=edge' http-equiv='X-UA-Compatible'/>

  <!--[ Theme Color ]-->
  <meta content='#d6d6d6' name='theme-color'/>
  <meta content='#d6d6d6' name='msapplication-navbutton-color'/>
  <meta content='#d6d6d6' name='apple-mobile-web-app-status-bar-style'/>
  <meta content='true' name='apple-mobile-web-app-capable'/>

  <!--[ Favicon ]-->
  <link href='https://cdn.jsdelivr.net/gh/kirakyblog/blog@master/logo/icon-120x120.png' rel='apple-touch-icon' sizes='120x120'/>
  <link href='https://cdn.jsdelivr.net/gh/kirakyblog/blog@master/logo/icon-152x152.png' rel='apple-touch-icon' sizes='152x152'/>
  <link href='https://cdn.jsdelivr.net/gh/kirakyblog/blog@master/logo/icon-32x32.png' rel='icon' sizes='32x32' type='image/png'/>
  <link href='https://cdn.jsdelivr.net/gh/kirakyblog/blog@master/logo/icon-96x96.png' rel='icon' sizes='96x96' type='image/png'/>
  <link href='https://cdn.jsdelivr.net/gh/kirakyblog/blog@master/logo/icon-16x16.png' rel='icon' sizes='16x16' type='image/png'/>
  <link href='https://cdn.jsdelivr.net/gh/kirakyblog/blog@master/logo/favicon.ico' rel='icon' type='image/x-icon'/>
  <link href='https://cdn.jsdelivr.net/gh/kirakyblog/blog@master/logo/favicon.ico' rel='shortcut icon' type='image/x-icon'/>

  <!--[ Stylesheet ]-->
  <style>/*<![CDATA[*/
/* Merriweather - Font */ @font-face{font-family: 'Merriweather'; font-style: italic; font-weight: 300; font-display: swap; src: local('Merriweather-LightItalic'), url(https://fonts.gstatic.com/s/merriweather/v22/u-4l0qyriQwlOrhSvowK_l5-eR7lXff4jvw.woff2) format('woff2'), url(https://fonts.gstatic.com/s/merriweather/v22/u-4l0qyriQwlOrhSvowK_l5-eR7lXcf8.woff) format('woff')} @font-face{font-family: 'Merriweather'; font-style: italic; font-weight: 700; font-display: swap; src: url(https://fonts.gstatic.com/s/merriweather/v22/u-4l0qyriQwlOrhSvowK_l5-eR7NWPf4jvw.woff2) format('woff2'), url(https://fonts.gstatic.com/s/merriweather/v22/u-4l0qyriQwlOrhSvowK_l5-eR71Wsf8.woff) format('woff')} @font-face{font-family: 'Merriweather'; font-style: italic; font-weight: 900; font-display: swap; src: url(https://fonts.gstatic.com/s/merriweather/v22/u-4l0qyriQwlOrhSvowK_l5-eR7NWPf4jvw.woff2) format('woff2'), url(https://fonts.gstatic.com/s/merriweather/v22/u-4l0qyriQwlOrhSvowK_l5-eR7NWMf8.woff) format('woff')} @font-face{font-family: 'Merriweather'; font-style: normal; font-weight: 300; font-display: swap; src: url(https://fonts.gstatic.com/s/merriweather/v22/u-4n0qyriQwlOrhSvowK_l521wRZWMf6.woff2) format('woff2'), url(https://fonts.gstatic.com/s/merriweather/v22/u-4n0qyriQwlOrhSvowK_l521wRpXA.woff) format('woff')} @font-face{font-family: 'Merriweather'; font-style: normal; font-weight: 700; font-display: swap; src: url(https://fonts.gstatic.com/s/merriweather/v22/u-4n0qyriQwlOrhSvowK_l52xwNZWMf6.woff2) format('woff2'), url(https://fonts.gstatic.com/s/merriweather/v22/u-4n0qyriQwlOrhSvowK_l52xwNpXA.woff) format('woff')} @font-face{font-family: 'Merriweather'; font-style: normal; font-weight: 900; font-display: swap; src: url(https://fonts.gstatic.com/s/merriweather/v22/u-4n0qyriQwlOrhSvowK_l52_wFZWMf6.woff2) format('woff2'), url(https://fonts.gstatic.com/s/merriweather/v22/u-4n0qyriQwlOrhSvowK_l52_wFpXA.woff) format('woff')}
/* Content */ body{background:#f1f3f6;color:#1f1f1f;font-family:'Merriweather',serif;font-weight:400;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}body:focus{outline:none !important} .mainCont{margin:0 auto;position:fixed;left:0;top:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center;padding:15px} .noIntPop{position:relative;overflow:hidden;text-align:center;padding:15px;border-radius:30px;background:#f1f3f6;box-shadow:inset 0 0 15px rgba(55, 84, 170, 0), inset 0 0 20px rgba(255, 255, 255, 0), 7px 7px 15px rgba(55, 84, 170, 0.15), -7px -7px 20px white, inset 0px 0px 4px rgba(255, 255, 255, 0.2)} .circle.t{top:-150px;right:-150px} .circle.b{bottom:-150px;left:-150px} .noIntCont{position:relative;z-index:1} .noIntIcon{padding:30px} .noConHead{font-weight:700;font-size:1.3rem} .noConDesc{font-size:16px;line-height:1.4em;padding-top:20px;font-weight:400;opacity:.8} .cta,.relCont{display:flex;justify-content:center;align-items:center} .relCont{padding:30px} .cta{width:66px;height:66px;background:#f1f3f6;outline:none;border:none;border-radius:690px;box-shadow:inset 0 0 15px rgba(55, 84, 170, 0), inset 0 0 20px rgba(255, 255, 255, 0), 7px 7px 15px rgba(55, 84, 170, 0.15), -7px -7px 20px white, inset 0px 0px 4px rgba(255, 255, 255, 0.2);transition:box-shadow 399ms ease-in-out} .cta:hover{box-shadow:inset 7px 7px 15px rgba(55, 84, 170, 0.15), inset -7px -7px 20px white, 0px 0px 4px rgba(255, 255, 255, 0.2)} .icon{content:'';width:25px;height:25px;display:inline-block} .iconB{content:'';width:50px;height:50px;display:inline-block} .icon.reload{background:url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%239dabc0' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'><polyline points='23 4 23 10 17 10'/><path d='M20.49 15a9 9 0 1 1-2.12-9.36L23 10'/></svg>") center / 25px no-repeat} .iconB.wifiOff{background:url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%231f1f1f' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><line x1='1' y1='1' x2='23' y2='23'/><path d='M16.72 11.06A10.94 10.94 0 0 1 19 12.55'/><path d='M5 12.55a10.94 10.94 0 0 1 5.17-2.39'/><path d='M10.71 5.05A16 16 0 0 1 22.58 9'/><path d='M1.42 9a15.91 15.91 0 0 1 4.7-2.88'/><path d='M8.53 16.11a6 6 0 0 1 6.95 0'/><line x1='12' y1='20' x2='12.01' y2='20'/></svg>") center / 50px no-repeat} .circle{position:absolute;z-index:1;width:280px;height:280px;border-radius:50%;background-color:#f1f3f6;box-shadow:inset 8px 8px 12px #d1d9e6, inset -8px -8px 12px #f9f9f9}
  /*]]>*/</style>
</head>

<body>
  <div class='mainCont notranslate'>
    <div class='noIntPop'>
      <div class='circle t'></div>
      <div class='circle b'></div>
      <div class='noIntCont'>
        <div class='noIntIcon'>
          <i class='iconB wifiOff'></i>
        </div>
        <div class='noConHead'>Oops, You're Offline!</div>
        <div class='noConDesc'>It looks like your network connection isn't working right now.</div>

        <div class='relCont'>
          <button class='cta' onclick='window.location.reload()'>
            <i class='icon reload'></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</body>

</html>`

async function handleRequest(request) {
  return new Response(html, {
    headers: {
      "content-type": "text/html;charset=UTF-8",
    },
  })
}

addEventListener("fetch", event => {
  return event.respondWith(handleRequest(event.request))
})

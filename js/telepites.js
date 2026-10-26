// Telepítés gomb – a JT AppKreator készítette.
(function () {
  var prompt = null;
  var telepitett = function () {
    return window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
  };
  var gomb = document.createElement('button');
  gomb.type = 'button';
  gomb.textContent = '📲 Főoldal – Kisbolt telepítése';
  gomb.setAttribute('aria-label', 'Az app telepítése erre az eszközre');
  gomb.style.cssText = 'position:fixed;left:50%;bottom:calc(16px + env(safe-area-inset-bottom));transform:translateX(-50%);'
    + 'z-index:99999;display:none;padding:12px 20px;border:0;border-radius:999px;background:#0b4a8f;color:#fff;'
    + 'font:600 16px system-ui,sans-serif;box-shadow:0 4px 16px rgba(0,0,0,.3);cursor:pointer;max-width:calc(100vw - 32px);';
  var uzenet = function (szoveg) {
    var d = document.createElement('div');
    d.textContent = szoveg;
    d.style.cssText = 'position:fixed;left:50%;bottom:calc(16px + env(safe-area-inset-bottom));transform:translateX(-50%);'
      + 'z-index:99999;padding:12px 18px;border-radius:10px;background:#1f8a4c;color:#fff;font:600 15px system-ui,sans-serif;'
      + 'box-shadow:0 4px 16px rgba(0,0,0,.3);max-width:calc(100vw - 32px);text-align:center;';
    document.body.appendChild(d);
    setTimeout(function () { d.remove(); }, 5000);
  };
  window.addEventListener('beforeinstallprompt', function (e) {
    e.preventDefault();
    prompt = e;
    if (!telepitett()) gomb.style.display = 'block';
  });
  gomb.addEventListener('click', function () {
    if (!prompt) return;
    gomb.style.display = 'none';
    prompt.prompt();
    prompt.userChoice.then(function () { prompt = null; });
  });
  window.addEventListener('appinstalled', function () {
    gomb.style.display = 'none';
    uzenet('Telepítve! Mostantól a kezdőképernyőről is indíthatod.');
  });
  var be = function () { document.body.appendChild(gomb); };
  if (document.body) be(); else document.addEventListener('DOMContentLoaded', be);
})();

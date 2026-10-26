// A JT App kreátor készítette.
// A VERZIO sort az app-update.bat emeli, ne töröld.
const VERZIO = '1.00';

// Service worker regisztrálása (offline működés).
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
}

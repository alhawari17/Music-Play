// Minimal service worker — just enables "Add to Home Screen" installability.
// Intentionally does not cache audio (Google Drive audio must stay live).
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => self.clients.claim());
self.addEventListener('fetch', () => {});

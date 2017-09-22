importScripts('workbox-sw.prod.v2.0.1.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "index.html",
    "revision": "f81cce4fa1e19535fae4ad7b253e0bc8"
  },
  {
    "url": "index.js",
    "revision": "762c26821654ad5a76c6fe3962f7176a"
  },
  {
    "url": "normalize.css",
    "revision": "e1f35d52e8c82528c3a55c310654626e"
  },
  {
    "url": "sounds/boom.wav",
    "revision": "550be808a1e25f5b4db6b66350270316"
  },
  {
    "url": "sounds/clap.wav",
    "revision": "a6e86dd7c2d3dee1ec0ad70c0d69df36"
  },
  {
    "url": "sounds/hihat.wav",
    "revision": "4ba39e07d1f8d98b362b9b65d6544538"
  },
  {
    "url": "sounds/kick.wav",
    "revision": "4dd585951cfd8c9f78cf3241ec4bbb7d"
  },
  {
    "url": "sounds/openhat.wav",
    "revision": "a62db465466a58a60a40c4466d7730e5"
  },
  {
    "url": "sounds/ride.wav",
    "revision": "b0d70ec54db9b098b9358f98d131c0f9"
  },
  {
    "url": "sounds/snare.wav",
    "revision": "80c4129b4b6b8810a079d6c311bf1d4b"
  },
  {
    "url": "sounds/tink.wav",
    "revision": "2a6bb6f58bb711ed7ea121b225dcc92d"
  },
  {
    "url": "sounds/tom.wav",
    "revision": "572ed39d3a51fff664d47d7b7b508292"
  },
  {
    "url": "style.css",
    "revision": "62a6cbc30efde09af3f6675bfcd96019"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);

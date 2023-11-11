const CACHE_NAME='v1_cache_bch_pwa';

var urlsToCache= [
    './',
    './assets/css/style.css',
    './assets/img/about.jpg',
    './assets/img/apple-touch-icon.png',
    './assets/img/counts-img.jpg',
    './assets/img/cta-bg.jpg',
    './assets/img/favicon.png',
    './assets/img/features.jpg',
    './assets/img/hero-bg.jpg',
    './assets/img/testimonials-bg.jpg',
    './assets/img/Transformers 16X16.png',
    './assets/img/Transformers 32X32.png',
    './assets/img/Transformers 64x64.png',
    './assets/img/Transformers 96x96.png',
    './assets/img/Transformers 128x128.png',
    './assets/img/Transformers 192x192.png',
    './assets/img/Transformers 256x256.png',
    './assets/img/Transformers 384x384.png',
    './assets/img/Transformers 512x512.png',
    './assets/img/Transformers 1024x1024.png',
    './assets/img/clients/client-1.png',
    './assets/img/clients/client-2.png',
    './assets/img/clients/client-3.png',
    './assets/img/clients/client-4.png',
    './assets/img/clients/client-5.png',
    './assets/img/clients/client-6.png',
    './assets/img/clients/client-7.png',
    './assets/img/clients/client-8.png',
    './assets/img/clients/client-1.png',
    './assets/img/clients/client-1.png',
    './assets/img/portafolio/portafolio-1.jpg',
    './assets/img/portafolio/portafolio-2.jpg',
    './assets/img/portafolio/portafolio-3.jpg',
    './assets/img/portafolio/portafolio-4.jpg',
    './assets/img/portafolio/portafolio-5.jpg',
    './assets/img/portafolio/portafolio-6.jpg',
    './assets/img/portafolio/portafolio-7.jpg',
    './assets/img/portafolio/portafolio-8.jpg',
    './assets/img/portafolio/portafolio-9.jpg',
    './assets/img/portafolio/portafolio-details-1.jpg',
    './assets/img/portafolio/portafolio-details-2.jpg',
    './assets/img/portafolio/portafolio-details-3.jpg',
    './assets/img/slide/slide-17.jpg',
    './assets/img/team/team-1.jpg',
    './assets/img/team/team-2.jpg',
    './assets/img/team/team-3.jpg',
    './assets/img/team/team-4.jpg',
    './assets/img/testimonials/testimonials-1.jpg',
    './assets/img/testimonials/testimonials-2.jpg',
    './assets/img/testimonials/testimonials-3.jpg',
    './assets/img/testimonials/testimonials-4.jpg',
    './assets/img/testimonials/testimonials-5.jpg',
    './assets/js/main.js',
    './assets/scss/Readme.txt',
    './assets/vendor/aos/aos.cjs.js',
    './assets/vendor/aos/aos.css',
    './assets/vendor/aos/aos.esm.js',
    './assets/vendor/aos/aos.js',
    './assets/vendor/aos/aos.js.map',
];

self.addEventListener
('install',e=>
    e.waitUntil
    (
        caches.open(CACHE_NAME)
        .then(cache=>{
            return cache.addAll(urlsToCache)
            .then(() => {
                self.skipWaiting();
            })

            .catch(err =>
                {
                    console.log('No se registro el cache',err);
                })
        })
    )
)

self.addEventListener('activate', e=>{
    const cacheWiteList=[CACHE_NAME];
    e.waitUntil(
        caches.keys()
        .then(cacheNames=>{
            return Promise.all(
                cacheNames.map(cacheNames=>{
                    if(cacheWiteList.indexOf(cacheNames)===-1){
                        return caches.delete(cacheNames);
                    }
                })
            );
        })
        .then(()=>{self.clients.claim();})
    );
});

self.addEventListener('fetch', e=>{
    e.respondWith(
        caches.match(e.request)
        .then(res=>{
            if(res){
                return res;
            }
            return fetch(e.request);
        })
    );
});
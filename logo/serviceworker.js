(function() {
    var nativeAddAll = Cache.prototype.addAll;
    var userAgent = navigator.userAgent.match(/(Firefox|Chrome)/(d + .) / );


    if (userAgent) {
        var agent = userAgent[1];
        var version = parseInt(userAgent[2]);
    }

    if (
        nativeAddAll && (!userAgent ||
            (agent === 'Firefox' && version >= 46) ||
            (agent === 'Chrome' && version >= 50)
        )
    ) {
        return;
    }

    Cache.prototype.addAll = function addAll(requests) {
        var cache = this;


        function NetworkError(message) {
            this.name = 'NetworkError';
            this.code = 19;
            this.message = message;
        }

        NetworkError.prototype = Object.create(Error.prototype);

        return Promise.resolve().then(function() {
            if (arguments.length < 1) throw new TypeError();


            var sequence = [];

            requests = requests.map(function(request) {
                if (request instanceof Request) {
                    return request;
                } else {
                    return String(request);
                }
            });

            return Promise.all(
                requests.map(function(request) {
                    if (typeof request === 'string') {
                        request = new Request(request);
                    }

                    var scheme = new URL(request.url).protocol;

                    if (scheme !== 'http:' && scheme !== 'https:') {
                        throw new NetworkError("Invalid scheme");
                    }

                    return fetch(request.clone());
                })
            );
        }).then(function(responses) {
            // If some of the responses has not OK-eish status,
            // then whole operation should reject
            if (responses.some(function(response) {
                    return !response.ok;
                })) {
                throw new NetworkError('Incorrect response status');
            }


            return Promise.all(
                responses.map(function(response, i) {
                    return cache.put(requests[i], response);
                })
            );
        }).then(function() {
            return undefined;
        });
    };

    Cache.prototype.add = function add(request) {
        return this.addAll([request]);
    };
}());

self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open('kirakyblog').then(function(cache) {
            return cache.addAll([
                '/'
            ]);
        })
    );
});
self.addEventListener('fetch', function(event) {
    console.log(event.request.url);
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});

if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('https://cdn.statically.io/gh/kirakyblog/blog/main/logo/serviceworker.js')
        .then(function() {
            console.log("Service Worker Registered");
        });
}

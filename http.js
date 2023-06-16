import got from 'got';

var $http = {
    post: function (url, options, callback) {
        got.post(url, options)
        .then(response => {
            response.body = response.body;
            response.statusCode = response.statusCode;
            response.statusMessage = response.statusMessage;

            if (options.json && typeof response.body === 'string') {
                response.body = JSON.parse(response.body);
            }

            callback(null, response, response.body);
        })
        .catch(error => {
            callback(error);
        });
    },
};

export default $http;
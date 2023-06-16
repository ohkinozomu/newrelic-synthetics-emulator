import got from "got";

const $http = {
  get(url, options, callback) {
    got
      .get(url, options)
      .then((response) => {
        if (options.json && typeof response.body === "string") {
          response.body = JSON.parse(response.body);
        }

        callback(null, response, response.body);
      })
      .catch((error) => {
        callback(error);
      });
  },
  post(url, options, callback) {
    got
      .post(url, options)
      .then((response) => {
        if (options.json && typeof response.body === "string") {
          response.body = JSON.parse(response.body);
        }

        callback(null, response, response.body);
      })
      .catch((error) => {
        callback(error);
      });
  },
  put(url, options, callback) {
    got
      .put(url, options)
      .then((response) => {
        if (options.json && typeof response.body === "string") {
          response.body = JSON.parse(response.body);
        }

        callback(null, response, response.body);
      })
      .catch((error) => {
        callback(error);
      });
  },
  delete(url, options, callback) {
    got
      .delete(url, options)
      .then((response) => {
        if (options.json && typeof response.body === "string") {
          response.body = JSON.parse(response.body);
        }

        callback(null, response, response.body);
      })
      .catch((error) => {
        callback(error);
      });
  },
};

export default $http;

import $http from "./http.js";

$http.get("https://httpbin.org/get", {}, (err, res, body) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("GET status:", res.statusCode);
  console.log("GET body:", body);
});

$http.post(
  "https://httpbin.org/post",
  {
    json: {
      test: "data",
    },
  },
  (err, res, body) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("POST status:", res.statusCode);
    console.log("POST body:", body);
  }
);

$http.put(
  "https://httpbin.org/put",
  {
    json: {
      test: "data",
    },
  },
  (err, res, body) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("PUT status:", res.statusCode);
    console.log("PUT body:", body);
  }
);

$http.delete("https://httpbin.org/delete", {}, (err, res, body) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("DELETE status:", res.statusCode);
  console.log("DELETE body:", body);
});

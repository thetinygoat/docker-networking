const express = require("express");
const app = express();
const redis = require("redis");
const process = require("process");

const client = redis.createClient({
  host: "redis-server",
  port: 6379
});
client.set("visits", 0);

app.get("/", (req, res) => {
  process.exit(0);
  client.get("visits", (err, visits) => {
    res.send("number of visits " + visits);
    client.set("visits", parseInt(visits) + 1);
  });
});

app.listen(8080, () => {
  console.log("server started");
});

const { Client } = require("pg");
const client = new Client({
  user: "maxroach",
  host: "localhost",
  database: "bank",
  port: "26257",
});
client.connect();

module.exports = {
  getAll: () => {
    return client.query("SELECT * from accounts");
  },
};

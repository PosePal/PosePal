// knexfile.js
module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      // delete dev.sqlite3 and change this to './dev.sqlite3' before npm run migrate
      // change this to './db/dev.sqlite3' before npm start
      filename: "./db/dev.sqlite3",
    },
    useNullAsDefault: true,
  },
  production: {
    client: "sqlite3",
    connection: {
      // delete dev.sqlite3 and change this to './dev.sqlite3' before npm run migrate
      // change this to './db/dev.sqlite3' before npm start
      filename: "./db/dev.sqlite3",
    },
    useNullAsDefault: true,
  },
};

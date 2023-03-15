module.exports = {
  host: "localhost",
  USER: "root",
  PASSWORD: "",
  DB: "node_restful_curd_test_db",
  dialect: "mysql",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

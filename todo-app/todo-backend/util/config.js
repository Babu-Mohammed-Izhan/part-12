const MONGO_URL = process.env.MONGO_URL || undefined;
const REDIS_URL = process.env.REDIS_URL || undefined;

module.exports = {
  MONGO_URL: "mongodb://izhan:izhan@localhost:3456/todos",
  REDIS_URL: "//localhost:6378",
};

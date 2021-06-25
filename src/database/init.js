const database = require("./config");

const initDb = {
  async init() {
    const db = await database();

    await db.exec();
  },
};

initDb.init();

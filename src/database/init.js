const database = require("./config");

const initDb = {
  async init() {
    const db = await database();

    await db.exec(`CREATE TABLE rooms(
    id INTEGER PRIMARY KEY,  
    pass TEXT
    )`);

    await db.exec(`CREATE TABLE questions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        description TEXT,
        check INT
    )`);
  },
};

initDb.init();

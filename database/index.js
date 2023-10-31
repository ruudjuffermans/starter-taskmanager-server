import Sequelize from "sequelize";
import config from "./config.js";
import associate from "./associate.js";
import models from "./models/index.js";

const sequelize = new Sequelize({
  dialect: config.DB_DIALECT,
  host: config.DB_HOST,
  username: config.DB_USER,
  password: config.DB_PASSWORD,
  database: config.DB_NAME,
  port: config.DB_PORT,
});

for (const model of models) {
  model(sequelize);
}

associate(sequelize);

export const db = sequelize.models;

export default sequelize;

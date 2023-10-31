import Sequelize from "sequelize";
const DataTypes = Sequelize.DataTypes;

export default (sequelize) => {
  const Worker = sequelize.define(
    "worker",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      power: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      state: {
        type: DataTypes.ENUM(
          "DOWN",
          "INITIALIZING",
          "RUNNING",
          "STOPPING",
          "INTERRUPTED"
        ),
        defaultValue: "DOWN",
      },
      command: {
        type: DataTypes.ENUM("PLAY", "PAUSE"),
        defaultValue: "PLAY",
      },
    },
    {
      tableName: "worker",
      timestamps: false,
    }
  );

  return Worker;
};

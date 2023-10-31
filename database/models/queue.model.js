import Sequelize from "sequelize";
const DataTypes = Sequelize.DataTypes;

export default (sequelize) => {
  const Queue = sequelize.define(
    "queue",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      state: {
        type: DataTypes.ENUM(
          "TODO",
          "PENDING",
          "AT_WORK",
          "INTERRUPTED",
          "DONE"
        ),
        defaultValue: "TODO",
      },
      class: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      function: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      args: {
        type: Sequelize.TEXT,
        get: function () {
          return JSON.parse(this.getDataValue("args"));
        },
        set: function (value) {
          this.setDataValue("args", JSON.stringify(value));
        },
        defaultValue: "{}",
      },
      worker: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      result: {
        type: Sequelize.TEXT,
        allowNull: true,
        get: function () {
          return JSON.parse(this.getDataValue("result"));
        },
        set: function (value) {
          this.setDataValue("result", JSON.stringify(value));
        },
      },
    },
    {
      tableName: "queue",
      timestamps: false,
    }
  );

  return Queue;
};

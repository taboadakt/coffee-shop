import { Sequelize, DataTypes } from "sequelize";

export const generateIngredientInventoryModel = (db: Sequelize) => {
  return db.define(
    "IngredientInventory",
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false,
        // @ts-ignore bad Sequelize typescript def i think
        defaultValue: Sequelize.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      stockFlOz: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    },
    {}
  );
};

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FoodItem', {
    item_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    item_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    id_category: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Category',
        key: 'id_category'
      }
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    is_veg: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    id_restaurant: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Restaurant',
        key: 'id_restaurant'
      }
    }
  }, {
    sequelize,
    tableName: 'FoodItem',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "item_id" },
        ]
      },
      {
        name: "fk_MenuItem_Category1_idx",
        using: "BTREE",
        fields: [
          { name: "id_category" },
        ]
      },
      {
        name: "fk_FoodItem_Restaurant1_idx",
        using: "BTREE",
        fields: [
          { name: "id_restaurant" },
        ]
      },
    ]
  });
};

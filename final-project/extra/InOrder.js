const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('InOrder', {
    id_in_order: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PlaceOrder_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'PlaceOrder',
        key: 'id_place_order'
      }
    },
    Food_item_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'FoodItem',
        key: 'item_id'
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'InOrder',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_in_order" },
        ]
      },
      {
        name: "fk_InOrder_PlaceOrder1_idx",
        using: "BTREE",
        fields: [
          { name: "PlaceOrder_id" },
        ]
      },
      {
        name: "fk_InOrder_MenuItem1_idx",
        using: "BTREE",
        fields: [
          { name: "Food_item_id" },
        ]
      },
    ]
  });
};

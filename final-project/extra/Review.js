const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Review', {
    id_review: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_customer: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Customer',
        key: 'id_customer'
      }
    },
    item_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'FoodItem',
        key: 'item_id'
      }
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    comment: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Review',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_review" },
        ]
      },
      {
        name: "fk_Review_Customer1_idx",
        using: "BTREE",
        fields: [
          { name: "id_customer" },
        ]
      },
      {
        name: "fk_Review_MenuItem1_idx",
        using: "BTREE",
        fields: [
          { name: "item_id" },
        ]
      },
    ]
  });
};

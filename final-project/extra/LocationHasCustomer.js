const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('LocationHasCustomer', {
    id_location: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Location',
        key: 'id_location'
      }
    },
    id_customer: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Customer',
        key: 'id_customer'
      }
    }
  }, {
    sequelize,
    tableName: 'LocationHasCustomer',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_location" },
          { name: "id_customer" },
        ]
      },
      {
        name: "fk_Location_has_Customer_Customer1_idx",
        using: "BTREE",
        fields: [
          { name: "id_customer" },
        ]
      },
      {
        name: "fk_Location_has_Customer_Location1_idx",
        using: "BTREE",
        fields: [
          { name: "id_location" },
        ]
      },
    ]
  });
};

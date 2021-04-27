const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('LocationHasRestaurant', {
    Location_idLocation: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Location',
        key: 'id_location'
      }
    },
    id_restaurant: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Restaurant',
        key: 'id_restaurant'
      }
    }
  }, {
    sequelize,
    tableName: 'LocationHasRestaurant',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_restaurant" },
          { name: "Location_idLocation" },
        ]
      },
      {
        name: "fk_Location_has_Restaurant_Location1_idx",
        using: "BTREE",
        fields: [
          { name: "Location_idLocation" },
        ]
      },
      {
        name: "fk_LocationHasRestaurant_Restaurant1_idx",
        using: "BTREE",
        fields: [
          { name: "id_restaurant" },
        ]
      },
    ]
  });
};

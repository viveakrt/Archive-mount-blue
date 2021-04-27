var DataTypes = require("sequelize").DataTypes;
var _Category = require("./Category");
var _Customer = require("./Customer");
var _FoodItem = require("./FoodItem");
var _InOrder = require("./InOrder");
var _Location = require("./Location");
var _LocationHasCustomer = require("./LocationHasCustomer");
var _LocationHasRestaurant = require("./LocationHasRestaurant");
var _PlaceOrder = require("./PlaceOrder");
var _Restaurant = require("./Restaurant");
var _Review = require("./Review");

function initModels(sequelize) {
  var Category = _Category(sequelize, DataTypes);
  var Customer = _Customer(sequelize, DataTypes);
  var FoodItem = _FoodItem(sequelize, DataTypes);
  var InOrder = _InOrder(sequelize, DataTypes);
  var Location = _Location(sequelize, DataTypes);
  var LocationHasCustomer = _LocationHasCustomer(sequelize, DataTypes);
  var LocationHasRestaurant = _LocationHasRestaurant(sequelize, DataTypes);
  var PlaceOrder = _PlaceOrder(sequelize, DataTypes);
  var Restaurant = _Restaurant(sequelize, DataTypes);
  var Review = _Review(sequelize, DataTypes);

  Customer.belongsToMany(Location, { as: 'id_location_Locations', through: LocationHasCustomer, foreignKey: "id_customer", otherKey: "id_location" });
  Location.belongsToMany(Customer, { as: 'id_customer_Customers', through: LocationHasCustomer, foreignKey: "id_location", otherKey: "id_customer" });
  Location.belongsToMany(Restaurant, { as: 'id_restaurant_Restaurants', through: LocationHasRestaurant, foreignKey: "Location_idLocation", otherKey: "id_restaurant" });
  Restaurant.belongsToMany(Location, { as: 'Location_idLocation_Locations', through: LocationHasRestaurant, foreignKey: "id_restaurant", otherKey: "Location_idLocation" });
  FoodItem.belongsTo(Category, { as: "id_category_Category", foreignKey: "id_category"});
  Category.hasMany(FoodItem, { as: "FoodItems", foreignKey: "id_category"});
  LocationHasCustomer.belongsTo(Customer, { as: "id_customer_Customer", foreignKey: "id_customer"});
  Customer.hasMany(LocationHasCustomer, { as: "LocationHasCustomers", foreignKey: "id_customer"});
  PlaceOrder.belongsTo(Customer, { as: "customer", foreignKey: "customer_id"});
  Customer.hasMany(PlaceOrder, { as: "PlaceOrders", foreignKey: "customer_id"});
  Review.belongsTo(Customer, { as: "id_customer_Customer", foreignKey: "id_customer"});
  Customer.hasMany(Review, { as: "Reviews", foreignKey: "id_customer"});
  InOrder.belongsTo(FoodItem, { as: "Food_item", foreignKey: "Food_item_id"});
  FoodItem.hasMany(InOrder, { as: "InOrders", foreignKey: "Food_item_id"});
  Review.belongsTo(FoodItem, { as: "item", foreignKey: "item_id"});
  FoodItem.hasMany(Review, { as: "Reviews", foreignKey: "item_id"});
  LocationHasCustomer.belongsTo(Location, { as: "id_location_Location", foreignKey: "id_location"});
  Location.hasMany(LocationHasCustomer, { as: "LocationHasCustomers", foreignKey: "id_location"});
  LocationHasRestaurant.belongsTo(Location, { as: "Location_idLocation_Location", foreignKey: "Location_idLocation"});
  Location.hasMany(LocationHasRestaurant, { as: "LocationHasRestaurants", foreignKey: "Location_idLocation"});
  InOrder.belongsTo(PlaceOrder, { as: "PlaceOrder", foreignKey: "PlaceOrder_id"});
  PlaceOrder.hasMany(InOrder, { as: "InOrders", foreignKey: "PlaceOrder_id"});
  FoodItem.belongsTo(Restaurant, { as: "id_restaurant_Restaurant", foreignKey: "id_restaurant"});
  Restaurant.hasMany(FoodItem, { as: "FoodItems", foreignKey: "id_restaurant"});
  LocationHasRestaurant.belongsTo(Restaurant, { as: "id_restaurant_Restaurant", foreignKey: "id_restaurant"});
  Restaurant.hasMany(LocationHasRestaurant, { as: "LocationHasRestaurants", foreignKey: "id_restaurant"});
  PlaceOrder.belongsTo(Restaurant, { as: "restaurant", foreignKey: "restaurant_id"});
  Restaurant.hasMany(PlaceOrder, { as: "PlaceOrders", foreignKey: "restaurant_id"});

  return {
    Category,
    Customer,
    FoodItem,
    InOrder,
    Location,
    LocationHasCustomer,
    LocationHasRestaurant,
    PlaceOrder,
    Restaurant,
    Review,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;

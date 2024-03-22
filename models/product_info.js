'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product_Info extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product_Info.belongsTo(models.Product,
        {
          foreignKey:'product_id',
        })
    }
  }
  Product_Info.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    product_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product_Info',
  });
  return Product_Info;
};
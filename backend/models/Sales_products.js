module.exports = (sequelize, DataTypes) => {
    const salesProducts = sequelize.define(
      'Sales_products',
      {
        quantity: DataTypes.STRING,
      },
      { timestamps: false },
    );
  
    return salesProducts;
  };
  
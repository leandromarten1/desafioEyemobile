module.exports = (sequelize, DataTypes) => {
  const Sales = sequelize.define(
    'Sales',
    {
      preco_total: DataTypes.INTEGER,
      endereco: DataTypes.STRING,
      forma_pagamento: DataTypes.STRING,
      cliente_id: DataTypes.INTEGER,
    },
    { timestamps: false },
  );

  Sales.associate = (models) => {
    Sales.belongsToMany(models.Product, {
      through: models.Sales_products,
      foreignKey: 'sale_id',
    });

    Sales.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user',
    });
  };

  return Sales;
};

const { SaleProduct } = require('../database/models');

const salesProductsService = {
  create: async ({ products, saleId }) => {
    const bulkArr = products
      .map(({ id: productId, quantity }) => ({ saleId, productId, quantity }));

    await SaleProduct.bulkCreate(bulkArr);
  },
};

module.exports = salesProductsService;

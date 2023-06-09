const express = require('express');
const routeRegister = require('../routes/register.route');
const routeAdmin = require('../routes/admin.route');
const routeProduct = require('../routes/product.route');
const routeLogin = require('../routes/login.route');
const routeSales = require('../routes/sales.route');
const routeSeller = require('../routes/seller.route');
const cors = require('../middleware/cors');

const app = express();
app.use(cors);
app.use(express.json());
app.use('/login', routeLogin);
app.use('/admin', routeAdmin);
app.use('/register', routeRegister);
app.use('/customer/products', routeProduct);
app.use('/customer/orders', routeSales);
app.use('/seller/orders', routeSeller);

app.use('/images', express.static('public'));
app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;

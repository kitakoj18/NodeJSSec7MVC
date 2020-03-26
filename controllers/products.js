// convention to start class with capital letter
const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
  };

exports.postAddProduct = (req, res, next) => {
    // instantiate new Product object
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
};

exports.getProducts = (req, res, next) => {
    // will give all products
    // const products = Product.fetchAll();
    // here, we are registered the response as a call back function so that
    // it will only trigger when the fetchAll function is done i.e. when all the call backs in the function are completed
    Product.fetchAll(products =>{
        res.render('shop', {
            prods: products,
            pageTitle: 'Shop',
            path: '/',
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true
        });
    });
}

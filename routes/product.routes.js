const { authJwt } = require("../middleware");
const product_controller = require("../controllers/product.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });

    app.get(
        "/productGetByID/:id_prod",
        //controller.getProdById
    );
    app.post(
      "/product/create/:category_id/:brand_id",
      product_controller.createProduct
  );


};
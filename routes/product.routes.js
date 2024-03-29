const { authJwt } = require("../middleware");
const u_controller = require("../controllers/user.controller");
const p_controller = require("../controllers/product.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });

    app.get(
        "/product/:id_prod",
        //controller.getProdById
    );
    app.post(
      "/product/create",
      brand_controller.createBrand
  );


};
const db = require("../models");
const Product = db.Product;

exports.getOne = (req, res) => {
    const id_prod = req.require;
    Product.findByPk(id_prod).then(

    )
};

exports.getAllFromCategory = (req, res) => {
      
};

exports.getAllFromBrand = (req, res) => {

};

exports.getAll = (req, res) => {

};

exports.createProduct = (req, res) => {
    
};

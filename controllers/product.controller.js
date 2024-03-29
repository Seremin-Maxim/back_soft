const db = require("../models");
const Product = db.Product;

exports.createProduct = async (req, res) => {
    try {
        const category_id = req.params.category_id;
        const brand_id = req.params.brand_id;
        console.log("category_id ========== ", category_id);
        console.log("brand_id ========== ", brand_id);
        const prod = await Product.create({
            category_id: req.body.category_id,
            brand_id: req.body.brand_id,
            SDK: req.body.SDK,
            price: req.body.price,
            stock: req.body.stock
        });
        return res.json(prod);
    } catch (error) {
        console.error('Ошибка при создании продукта:', error);
        return res.status(500).json({ error: 'Ошибка при создании продукта' });
    }
};

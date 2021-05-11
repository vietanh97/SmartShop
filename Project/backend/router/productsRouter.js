import express from 'express';
import Products from '../model/productsModel'


const router = express.Router();

/* router.get("/", async(req, res) => {
    const products = await Products.find();
    res.send(products)
})
router.get('/getproducts', async (req, res) => {
    try {
      const products = new Products({
        name: "iphone 6",
        price: 1000,
        image: "/images/p1.jpg",
        brand: "apple",
        category: "smart phone",
      });
      const newProducts = await products.save();
      res.send(newProducts);
    } catch (error) {
      res.send({ message: error.message });
    }
  });

  router.post("/", async(req, res) => {
    const products = new Products ({
    name: req.body.name,
    price: req.body.price,
    image: req.body.image,
    brand: req.body.brand,
    category: req.body.category
    })
    const newProducts = await products.save()
    if (newProducts) {
        return res.status(201).send({ message: 'New Products Created', data: newProducts });
    }
    return res.status(500).send({ message: ' Error in Creating Products.' });
    
}) */

  export default router;
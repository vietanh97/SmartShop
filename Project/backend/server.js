import express from 'express'
import data from './data';
import dotenv from 'dotenv'
import config from './config'
import mongoose from 'mongoose'
import userRouter from './router/userRouter'
import productRoute from './router/productRouter'
import productsRouter from './router/productsRouter'
import bodyParser from 'body-parser';

dotenv.config();

const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}).catch(errror => console.log(error.reson));

//const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())
app.use("/api/users", userRouter);
app.use('/api/product', productRoute);
//app.use('/api/products', productsRouter);
app.get("/api/products/:id", (req, res) => {
    const productId = req.params.id;
    /* res.send(data.products.find(x => x._id === productId)) */
    const product = data.products.find(x => x._id === productId)
    if (product) {
        res.send(product)
    } else {
        res.status(404).send({msg: "Product Not Found"})
    }
})

/* app.get('/api/products', (req,res) => {
    res.send(data.products)
}) */

app.get("/",(req,res) => {
    res.send("server ready");
});

app.listen(5000, () => {
    console.log('server at http://localhost:5000')
})
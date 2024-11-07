const express=require("express");
const cors = require("cors");
const dotenv=require("dotenv");
const products = require('./data'); 
dotenv.config();
const app=express();

// Configure CORS
app.use(cors({
    origin: "http://localhost:5173", // Frontend URL
    methods: "GET,POST,PUT,DELETE",  // Allowed methods
    credentials: true                // Allow cookies (if needed)
}));




//middlewares
app.use(express.json());
app.use(express.static('public'));

app.get("/api/v1/allProducts", async (req,res)=>{
    res.status(200).send({
        data:products,
        success:true
    })
});

app.get("/api/v1/getProductDetails/:id", async (req,res)=>{
    const id = parseInt(req.params.id, 10);
    res.status(200).send({
        data:products[id-1],
        success:true
    })
});

app.get('/api/v1/payment', (req, res) => {
    const paymentSuccess = Math.random() > 0.5; // Randomly decide success/failure
    if (paymentSuccess) {
        res.status(200).json({ success: true, message: 'Payment Successful' });
    } else {
        res.status(400).json({ success: false, message: 'Payment Failed' });
    }
});
app.get("/",async (req,res)=>{
    res.status(200).send({
        message:"server running"
    });
});

const port=process.env.PORT || 8080;
app.listen(port,()=>{
    console.log(`Server running in ${process.env.DEV_MODE} mode on port ${port}`);
});

import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { cartContext } from "../context/context";
import { FaShoppingCart, FaArrowLeft } from "react-icons/fa";
import "../../public/stylesheets/ProductDetails.css";

const ProductDetails = () => {
    const params = useParams();
    const [product, setProduct] = useState({});
    const { cartItems, setCartItems } = useContext(cartContext);

    const notifySuccess = () => toast.success("Item added to cart!");
    const getProductDetails = async () => {
        try {
            const res = await axios.get(`${import.meta.env.VITE_BACKEND_API}/api/v1/getProductDetails/${params.id}`);
            if (res.status === 200) {
                setProduct(res.data.data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getProductDetails();
    }, []);

    const handleAddToCart = () => {
        let found = cartItems.some((item) => item.id === product.id);
        if (!found) {
            setCartItems((prev) => [...prev, { ...product, quantity: 1 }]);
            notifySuccess();
        } else {
            toast.info("Item already in cart");
        }
    };

    return (
        <div className="product-details-container container my-5">
            <ToastContainer />
            {product && (
                <div className="product-details-card card shadow-lg">
                    <div className="row g-0">
                        <div className="col-md-6">
                            <img src={product.image} className="product-details-image img-fluid rounded-start" alt={product.name} />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body">
                                <h3 className="product-details-title card-title text-center">{product.name}</h3>
                                <ul className="product-details-info list-group list-group-flush text-center mt-3">
                                    <li className="list-group-item"><strong>Price:</strong> ₹{product.price}</li>
                                    <li className="list-group-item"><strong>Category:</strong> {product.category}</li>
                                    <li className="list-group-item"><strong>Rating:</strong> {product.rating} ⭐</li>
                                </ul>
                                <p className="product-details-description card-text mt-4">{product.description}</p>
                                <div className="d-flex justify-content-around mt-4">
                                    <Link to="/products" className="product-details-back-btn btn btn-secondary d-flex align-items-center justify-content-center">
                                        <FaArrowLeft className="me-2" /> Go Back
                                    </Link>
                                    <button 
                                        className="product-details-cart-btn btn btn-success d-flex align-items-center justify-content-center" 
                                        onClick={handleAddToCart}
                                    >
                                        <FaShoppingCart className="me-2" /> Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductDetails;

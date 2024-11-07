import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../public/stylesheets/ProductListing.css";

const ProductListing = () => {
    const [products, setProducts] = useState([]);

    const getAllProducts = async () => {
        try {
            const res = await axios.get(`${import.meta.env.VITE_BACKEND_API}/api/v1/allProducts`);
            if (res.status === 200) {
                setProducts(res.data.data);
            } else {
                console.log("Something went wrong");
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllProducts();
    }, []);

    return (
        <div className="product-listing-container container">
            <h2 className="product-listing-title text-center my-4">Our Products</h2>
            {products.length === 0 ? (
                <p className="text-center">No products available</p>
            ) : (
                <div className="product-listing-grid">
                    {products.map((product) => (
                        <div className="product-listing-card card" key={product.id}>
                            <img src={product.image} className="product-listing-image card-img-top" alt={product.name} />
                            <div className="card-body d-flex flex-column">
                                <h5 className="product-listing-name card-title">{product.name}</h5>
                                <p className="product-listing-description card-text">{product.description}</p>
                                <p className="product-listing-price card-text"><strong>Price:</strong> ₹{product.price}</p>
                                <div className="mt-auto">
                                    <Link to={`/product/${product.id}`} className="product-listing-details-btn btn btn-primary">
                                        See Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProductListing;

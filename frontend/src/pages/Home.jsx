// src/pages/Home.js

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../public/stylesheets/Home.css";
import axios from "axios";

const Home = () => {

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
    <div className="home-page">
      {/* Hero Section */}
      <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="../../public/images/image2.jpg"
              className="d-block w-100 darken-image"
              alt="Welcome to ShopOnline"
            />
            <div className="carousel-caption d-none d-md-block">
              <h3>Welcome to SnapBuy</h3>
              <p>Your one-stop shop for all your needs.</p>
              <Link to="/products" className="btn btn-primary">
                Shop Now
              </Link>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="../../public/images/image3.png"
              className="d-block w-100 darken-image"
              alt="Exclusive Deals"
            />
            <div className="carousel-caption d-none d-md-block">
              <h3>Exclusive Deals</h3>
              <p>Get amazing discounts on your favorite products!</p>
              <Link to="/products" className="btn btn-primary btn-lg">
                Explore Deals
              </Link>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Features Section */}
      <div className="container my-5 text-center">
        <h2 className="mb-4">Why Shop With Us?</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-4 custom-feature-card">
              <img
                src="../../public/images/freeshiping.avif"
                className="card-img-top card-img-custom"
                alt="Free Shipping"
              />
              <div className="card-body">
                <h5 className="card-title">Free Shipping</h5>
                <p className="card-text">Enjoy free shipping on all orders above $50.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 custom-feature-card">
              <img
                src="../../public/images/support.png"
                className="card-img-top card-img-custom"
                alt="24x7 Support"
              />
              <div className="card-body">
                <h5 className="card-title">24x7 Customer Support</h5>
                <p className="card-text">We're here to help you at any time of the day.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 custom-feature-card">
              <img
                src="../../public/images/payment.avif"
                className="card-img-top card-img-custom"
                alt="Secure Payments"
              />
              <div className="card-body">
                <h5 className="card-title">Secure Payments</h5>
                <p className="card-text">Your transactions are safe with our secure payment gateway.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Products Section */}
      <div className="container my-5">
        <h2 className="text-center mb-4">Popular Products</h2>
        <div className="row">
          {products.slice(0, 4).map((product) => (
            <div className="col-md-3" key={product.id}>
              <div className="card mb-4 h-100 custom-card-hover">
                <img
                  src={product.image}
                  className="card-img-top product-image"
                  alt={`Product ${product.id}`}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">Starting at ₹{product.price}</p>
                  <Link to={`/product/${product.id}`} className="btn btn-primary mt-auto">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

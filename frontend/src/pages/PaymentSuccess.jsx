import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { FaCheckCircle } from 'react-icons/fa';
import { cartContext } from '../context/context';
import 'react-toastify/dist/ReactToastify.css';
import '../../public/stylesheets/Payment.css'; // Shared CSS for success and failure

const PaymentSuccess = () => {
    const { cartItems, setCartItems } = useContext(cartContext);
    const [order, setOrder] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        toast.success("Payment successful! Order placed.");
        setOrder(cartItems);
        
        // Calculate the total amount
        const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setTotalAmount(total.toFixed(2)); // Set total amount with 2 decimal places

        setCartItems([]); // Clear the cart after successful payment
    }, []);

    return (
        <div className="payment-feedback-container">
            <ToastContainer />
            <div className="feedback-content success-content">
                <FaCheckCircle className="feedback-icon success-icon" />
                <h1>Payment Successful!</h1>
                <p>Your order has been placed successfully. Thank you for shopping with us!</p>

                <h3 className="order-summary-title">Order Summary:</h3>
                <ul className="order-summary-list">
                    {order.map((item) => (
                        <li key={item.id} className="order-summary-item">
                            <span>{item.name} (x{item.quantity})</span>
                            <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                        </li>
                    ))}
                </ul>

                <h4 className="order-total">
                    Total: ₹{totalAmount}
                </h4>

                <Link to="/products" className="home-button">Browse more products</Link>
            </div>
        </div>
    );
};

export default PaymentSuccess;

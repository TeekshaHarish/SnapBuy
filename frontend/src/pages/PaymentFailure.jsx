import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { FaTimesCircle } from 'react-icons/fa';
import 'react-toastify/dist/ReactToastify.css';
import '../../public/stylesheets/Payment.css'; // External CSS file for custom styling

const PaymentFailure = () => {
    useEffect(() => {
        toast.error("Payment failed");
    }, []);

    return (
        <div className="payment-failure-container">
            <ToastContainer />
            <div className="failure-content">
                <FaTimesCircle className="failure-icon" />
                <h1>Payment Failed</h1>
                <p>Unfortunately, your payment could not be processed at this time. Please try again or use an alternative payment method.</p>
                <Link to="/checkout" className="retry-button">Try Again</Link>
            </div>
        </div>
    );
};

export default PaymentFailure;

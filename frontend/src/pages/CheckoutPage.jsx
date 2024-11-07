import React, { useContext } from "react";
import { cartContext } from "../context/context";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../public/stylesheets/Checkout.css";
import { FaShoppingCart } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';

const CheckoutPage = () => {
    const { cartItems, setCartItems } = useContext(cartContext);
    const navigate = useNavigate();

    const addQuantityToCart = (itemToAdd) => {
        setCartItems((prev) =>
            prev.map((item) =>
                item.id === itemToAdd.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };

    const removeQuantityToCart = (itemToRemove) => {
        setCartItems((prev) =>
            prev
                .map((item) =>
                    item.id === itemToRemove.id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter((item) => item.quantity > 0)
        );
    };

    const totalAmount = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    const handleMakePayment = async () => {
        try {
            if(cartItems.length==0){
                toast.info("Cart is empty please add your items to buy!");
                return;
            }
            const res = await axios.get(`${import.meta.env.VITE_BACKEND_API}/api/v1/payment`);
            if (res.data.success) {
                toast.success("Payment Complete");
                navigate("/payment-success");
            } else {
                toast.error("Payment Failed!")
                navigate("/payment-failure");
            }
        } catch (error) {
            console.log("error", error);
            toast.error("Payment Failed!")
            navigate("/payment-failure");
        }
    };

    return (
        <div className="container my-5">
            <ToastContainer />
            <h2 className="text-center mb-4">Checkout</h2>
            <div className="checkout-table mb-4">
                <div className="row header-row bg-secondary bg-opacity-50 text-white p-2">
                    <div className="col">Item Name</div>
                    <div className="col">Price</div>
                    <div className="col">Quantity</div>
                    <div className="col">Add</div>
                    <div className="col">Remove</div>
                    <div className="col">Total</div>
                </div>
                {cartItems.map((item) => (
                    <div className="row item-row p-2 border-bottom" key={item.id}>
                        <div className="col">{item.name}</div>
                        <div className="col">₹{item.price}</div>
                        <div className="col">{item.quantity}</div>
                        <div className="col">
                            <button className="btn btn-outline-success btn-sm" onClick={() => addQuantityToCart(item)}>
                                +
                            </button>
                        </div>
                        <div className="col">
                            <button className="btn btn-outline-danger btn-sm" onClick={() => removeQuantityToCart(item)}>
                                -
                            </button>
                        </div>
                        <div className="col">₹{item.price * item.quantity}</div>
                    </div>
                ))}
            </div>

            {/* Summary Section */}
            <div className="checkout-summary text-center p-4 bg-light border rounded w-75 mx-auto">
                <h4>Total Amount: ₹{totalAmount}</h4>
                <div className="w-50 mx-auto">
                <button className="btn btn-primary bg-opacity-50 mt-1" onClick={handleMakePayment}>
                    Proceed to Payment <FaShoppingCart />
                </button>
                </div>
                
            </div>
        </div>
    );
};

export default CheckoutPage;

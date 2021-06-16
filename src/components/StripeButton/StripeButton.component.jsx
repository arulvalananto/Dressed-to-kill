import React from "react";

import StripeCheckout from "react-stripe-checkout";

import Logo from "../../assets/logo.png";

import axios from "axios"

const StripeButton = ({ price }) => {
    const priceForStripe = price * 100;

    const onToken = (token) => {
        console.log(token);

        const payment = async () => {
            const response = await axios.post("http://localhost:5000/api/v1/payment",
                { amount: priceForStripe, token });
            console.log(response);
        }
        payment();
    };

    return (
        <StripeCheckout
            name="Dressed-to-kill Pvt Ltd."
            description={`Your total is $${price}`}
            image={Logo}
            panelLabel="Pay Now"
            amount={priceForStripe}
            token={onToken}
            stripeKey="pk_test_51Ho1KODp1q75VMGVIej6B8V6ymRCQx5yqbEVkeIYG1zJPXNiIGnqf8v62lU8LqhAbarqvPMFJ7itUUzBctH86wHU005rxhG6Ll"
            alipay
            bitcoin
            allowRememberMe
            shippingAddress
            billingAddress={true}
            zipCode={true}
        />
    );
};

export default StripeButton;

import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IW6AYIFOLeKGtm7StnxaQdX7KI4cWUNS9LILKRolMjjVOEJUbwgVGvn9GCUtQ1xmlOC1WfgfmWjveLkXCrqHfF400xuCDHwGl';

    const onToken = token => {
        console.log(token);
        alert('Payment Succesful');
    };

    return (
        <StripeCheckout
            label='Pay Now'
            name='BlueBerry Clothing Ltd.'
            billingAddress
            shippingAddress
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;
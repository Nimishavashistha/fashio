import React from "react";
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price*100;
    const publishableKey = 'pk_test_51KUxd8SCWa0sVmUFXUdxGKQ2y8WZssk6ZmmSiD0wvXhHbRqsR61VvI1fmsGpzTx3nipbRBTiKO2rGAamnXKRYSxb00DhqABkLq';
    
    const onToken = token => {
        console.log(token);
        alert('Payment Succesful!');
      };
    

    return (
        <StripeCheckout
      label='Pay Now'
      name='FASHIO'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
    )
}

export default StripeCheckoutButton;
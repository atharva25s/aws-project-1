import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from "../components/CheckoutForm";
import backgroundImage from '../assets/jason-leung-D4YrzSwyIEc-unsplash-1024x683.jpg.webp'

const Checkout = () => {
    const stripePromise = loadStripe('pk_test_51PmB4IIndIEU8PSY2XYEZ3KfYJSZITSCVdITpKVKeWhZXWvkaV3eUv2lIV3Hlaap7VmLtvpqamU9hXul8x3dh8fY00vWd6MN23');

    return (
        <div  className='h-[90vh] flex flex-col justify-center'
        style={{ 
            backgroundImage: `url(${backgroundImage})`, 
            // backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            //  Adjust height as needed 
        }}>
        <section className="checkout-wrapper"
        >
            <Authenticator>
                {() => (
                    <Elements stripe={stripePromise}>
                        <section>
                            <h2>Time to Checkout?</h2>
                            <CheckoutForm />
                        </section>
                    </Elements>
                )}
            </Authenticator>
        </section>
        </div>
    );
}

export default Checkout;


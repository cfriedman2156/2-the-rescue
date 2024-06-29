// components/DonateButton.js
import { loadStripe } from '@stripe/stripe-js';
import { useState } from 'react';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const DonateButton = ({ amount }) => {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);

    const stripe = await stripePromise;
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount }), // send the amount in the request body
    });

    const session = await response.json();

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      alert(result.error.message);
    }

    setLoading(false);
  };

  return (
    <button
      role="link"
      onClick={handleClick}
      disabled={loading}
      className="bg-blue-500 text-white font-bold py-2 my-7 px-4 rounded"
    >
      {loading ? 'Processing...' : `Donate`}
    </button>
  );
};

export default DonateButton;

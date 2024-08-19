const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { amount, interval, animalName } = req.body;

    try {
      let session;
      let productName = '';

      if (interval === 'monthly') {
        if (animalName) {
          productName = `Monthly Sponsorship of ${animalName}`;
        } else {
          productName = 'Monthly Donation';
        }
        
        const product = await stripe.products.create({
          name: productName,
        });

        const price = await stripe.prices.create({
          unit_amount: amount,
          currency: 'usd',
          recurring: {
            interval: 'month',
          },
          product: product.id,
        });

        session = await stripe.checkout.sessions.create({
          payment_method_types: ['card'],
          line_items: [
            {
              price: price.id,
              quantity: 1,
            },
          ],
          mode: 'subscription',
          success_url: `${req.headers.origin}/Success`,
          cancel_url: `${req.headers.origin}/Donate`,
        });
      } else {
        productName = 'One-Time Donation';

        session = await stripe.checkout.sessions.create({
          payment_method_types: ['card'],
          line_items: [
            {
              price_data: {
                currency: 'usd',
                product_data: {
                  name: productName,
                },
                unit_amount: amount,
              },
              quantity: 1,
            },
          ],
          mode: 'payment',
          success_url: `${req.headers.origin}/Success`,
          cancel_url: `${req.headers.origin}/Donate`,
        });
      }

      res.status(200).json({ id: session.id });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}

// import React, { useState } from 'react';
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// const DonationForm = ({ onSubmit, campaignId }) => {
//   const [amount, setAmount] = useState('');
//   const stripe = useStripe();
//   const elements = useElements();

//   const handleAmountChange = (e) => {
//     setAmount(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!stripe || !elements) {
//       return; // Stripe.js has not yet loaded.
//     }

//     // Create a payment method using the entered card details
//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: 'card',
//       card: elements.getElement(CardElement),
//     });

//     if (error) {
//       console.log('[error]', error);
//       alert(error.message);
//     } else {
//       // If the card is valid, proceed with the donation
//       const donationData = {
//         campaignId,
//         amount,
//         paymentMethodId: paymentMethod.id,
//       };

//       onSubmit(donationData);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="mb-6">
//       <div>
//         <label className="text-lg font-semibold">Donation Amount</label>
//         <input
//           type="number"
//           value={amount}
//           onChange={handleAmountChange}
//           className="w-full p-3 mt-2 border-2 rounded-lg"
//           placeholder="Enter amount"
//           min="1"
//         />
//       </div>
//       <div className="mt-6">
//         <label className="text-lg font-semibold ">Payment Details</label>
//        <div className='mt-4 '>
//         <CardElement />
//         </div>
//       </div>
//       <button
//         type="submit"
//         disabled={!stripe || !amount}
//         className="mt-10 w-full bg-blue-600 text-white font-bold py-3  rounded-lg"
//       >
//         Donate Now
//       </button>
//     </form>
//   );
// };

// export default DonationForm;










// import React, { useState } from 'react';
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// import { getUserSecret } from '../services/donationService';
// const DonationForm = ({ campaignId, onSuccessfulDonation }) => {
//   const [amount, setAmount] = useState('');
//   const stripe = useStripe();
//   const elements = useElements();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!stripe || !elements) return;

//     try {
//       // const { data } = await axios.post(`http/api/campaigns/${campaignId}/donate`, { amount });

//       const data=await getUserSecret({campaignId,amount})
//       const  clientSecret  = data.clientSecret;

//       const cardElement = elements.getElement(CardElement);
//       const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
//         payment_method: { card: cardElement },
//       });

//       if (error) {
//         console.error(error);
//         alert('Payment failed. Please try again.');
//       } else if (paymentIntent.status === 'succeeded') {
//         alert('Donation successful! Thank you.');
//         console.log("paymnet intentform ",paymentIntent)
//         onSuccessfulDonation({paymentIntent,amount}); // Trigger post-payment action
//       }
//     } catch (error) {
//       console.error('Error during donation:', error);
//       alert('Donation failed. Please try again.');
//     }
//   };

//   return (
    



//     <form onSubmit={handleSubmit} className="mb-6">
//       <div>
//         <label className="text-lg font-semibold">Donation Amount</label>
//         <input
//           type="number"
//           value={amount}
//           onChange={(e) => setAmount(e.target.value)}
//           className="w-full p-3 mt-2 border-2 rounded-lg"
//           placeholder="Enter amount"
//           min="1"
//         />
//       </div>
//       <div className="mt-6">
//         <label className="text-lg font-semibold ">Payment Details</label>
//        <div className='mt-4 '>
//         <CardElement />
//         </div>
//       </div>
//       <button
//         type="submit"
//         disabled={!stripe || !amount}
//         className="mt-10 w-full bg-blue-600 text-white font-bold py-3  rounded-lg"
//       >
//         Donate Now
//       </button>
//     </form>





//   );
// };

// export default DonationForm;




import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { getUserSecret } from '../services/donationService';
import { toast } from 'react-hot-toast'; // Import react-hot-toast
import { ClipLoader } from 'react-spinners'; // Import ClipLoader from react-spinners
const DonationForm = ({ campaignId, onSuccessfulDonation }) => {
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false); // State to manage loading status
  const stripe = useStripe();
  const elements = useElements();


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;
setLoading(true)
    try {
      const data = await getUserSecret({ campaignId, amount });
      const clientSecret = data.clientSecret;

      const cardElement = elements.getElement(CardElement);
      const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: { card: cardElement },
      });

      if (error) {
        console.error(error);
        toast.error('Payment failed. Please try again.');
        setLoading(false)
      } else if (paymentIntent.status === 'succeeded') {
        // toast.success('Donation successful! Thank you.');
        onSuccessfulDonation({ paymentIntent, amount }); // Trigger post-payment action
        setLoading(false)
      }
    } catch (error) {
      console.error('Error during donation:', error);
      // toast.error('Donation failed. Please try again.');
      setLoading(false)
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div>
        <label className="text-lg font-semibold">Donation Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-3 mt-2 border-2 rounded-lg"
          placeholder="Enter amount"
          min="1"
        />
      </div>
      <div className="mt-6">
        <label className="text-lg font-semibold">Payment Details</label>
        <div className="mt-4">
          <CardElement />
        </div>
      </div>
      <button
        type="submit"
        disabled={!stripe || !amount}
        className="mt-10 w-full bg-blue-600 text-white font-bold py-3 rounded-lg"
      >
      {loading ? (
          <ClipLoader color="#ffffff" size={30} /> // Show the spinner if loading
        ) : (
          'Donate Now'
        )}
      </button>
    </form>
  );
};

export default DonationForm;

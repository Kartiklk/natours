/* eslint-disable*/
import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe('pk_test_51MCgFoSAAUTIQMxNFhZzOxkSKy2vD5icPN1iINRokZZjzKslupekoNrpIvWiSxchlwKSN1YODMEPWpCCHhxWzTOs00LKIzY1vi');
export const bookTour = async tourId => {
    //get the session from api
    try{const session = await axios(
        `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`  
    );
    console.log(session);
    //create checkout form + chanre credit card
        await stripe.redirectToCheckout({
            sessionId: session.data.session.id
        });
    } catch (err) {
        console.log(err);
        showAlert('error', err);
    }
}
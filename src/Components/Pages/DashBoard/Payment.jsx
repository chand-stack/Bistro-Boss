import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import CheckOut from "./CheckOut";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATWAY_PK)
const Payment = () => {

    return (
        <div>
            <SectionTitle heading={"Payment"}></SectionTitle>
           <Elements stripe={stripePromise}>
            <CheckOut></CheckOut>
           </Elements>
        </div>
    );
};

export default Payment;
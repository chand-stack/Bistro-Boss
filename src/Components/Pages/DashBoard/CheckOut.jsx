import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxios from "../../../useAxios/useAxios";
import useCart from "../../../Hook/useCart"; 
import { AuthContext } from "../../../Provider/AuthProvider";

const CheckOut = () => {
    const stripe = useStripe()
    const elements = useElements()
    const axios = useAxios()
    const [cart] = useCart()
    const [clientSecret,setClientSecret] = useState('')
    const {user} = useContext(AuthContext)

    const totalPrice = cart.reduce((preValue,currValue)=> preValue+currValue.price,0)
    console.log(totalPrice);


    useEffect(() => {
        axios.post("/create-payment-intent", { price: totalPrice })
          .then((res) => {
            console.log(res.data);
            setClientSecret(res.data.clientSecret); // Assuming the response key is clientSecret, adjust if needed
          })
          .catch((error) => {
            console.error("Error while fetching payment intent:", error);
            // Handle the error, you might want to set an error state or display an error message to the user
          });
      }, [axios,totalPrice]);

      console.log(clientSecret);

    const handleSubmit = async (event) =>{
        event.preventDefault() 
        if(!stripe || !elements){
            return;
        }

        const card = elements.getElement(CardElement);
        if(card==null){
            return;
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type:'card',
            card,
        });
        if(error){
            console.log("error",error);
        }else{
            console.log("paymentMethod",paymentMethod);
        }

        const {paymentIntent ,error:confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method:{
                    card:card,
                    billing_details:{
                        email: user?.email || "anonymous",
                        name: user?.displayName || "anonymous"
                    }
                }
            }
        )

       



        if(confirmError){
            console.log(confirmError);
        }else{
            console.log(paymentIntent);
            if(paymentIntent.status=="succeeded"){
                const payment = {
                    email: user.email,
                    price: totalPrice,
                    transactionId: paymentIntent.id,
                    date: new Date(),
                    cartIds: cart.map(item=>item._id),
                    menuItemIds: cart.map(item => item.menuId),
                    status :"pending"
                }
                const res = await axios.post("/payments", payment)
                console.log(res.data);
            }
        }

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                options={{
                    style:{
                        base:{
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color:'#aab7c4',
                            },
                        },
                        invalid:{
                            color:'#9e2146'
                        },
                    },
                }}
                />
           <button disabled={!stripe || !clientSecret} className="btn btn-primary" type="submit">PAY</button>
            </form>
            
        </div>
    );
};

export default CheckOut;
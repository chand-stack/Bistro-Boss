import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAxios from "../../../useAxios/useAxios";
import useCart from "../../../Hook/useCart";

const ShopCard = ({item}) => {
    const {price,recipe,name,image,_id} = item;
    const { user } = useContext(AuthContext)
    const axios = useAxios()

    const navigate = useNavigate()
    const [,refetch] = useCart()

    const cartHandler = () => {
      // console.log(food);
      if(user && user.email){

        const cartItem = {
          menuId : _id,
             email: user.email,
             name,
             image,
             price
        }

        axios.post("/carts", cartItem)
        .then(res => {console.log(res.data)
         Swal.fire({
              title: "Added to cart!",
              text: "Your food has been added to cart.",
              icon: "success"
            });
            refetch()
        })
        

      }else{
        Swal.fire({
          title: "You have to login for add to cart",
          text: "Want to login?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, login"
        }).then((result) => {
          if (result.isConfirmed) {
            // Swal.fire({
            //   title: "Deleted!",
            //   text: "Your file has been deleted.",
            //   icon: "success"
            // });
            navigate("/login")
          }
        });
      }
    }
    return (
        <div>
            <div className="card  rounded-none">
  <figure><img className="h-[300px] w-full" src={image} alt="food" /></figure>
  <p className="text-white bg-black font-semibold absolute right-0 mt-5 mr-5 py-1 px-3">${price}</p>
  <div className="card-body text-center bg-gray-100">
    <h2 className="card-title flex-grow justify-center">{name}</h2>
    <p className="flex-grow">{recipe}</p>
    <div className="card-actions justify-center">
      <button onClick={cartHandler} className="btn btn-outline border-t-0 border-l-0 border-r-0 border-b-2 text-[#BB8506] hover:text-[#BB8506] border-[#BB8506]">ADD TO CART</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ShopCard;
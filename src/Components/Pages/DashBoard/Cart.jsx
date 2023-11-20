import { FaDashcube, FaTrash } from "react-icons/fa";
import useCart from "../../../Hook/useCart";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import useAxios from "../../../useAxios/useAxios";
import { Link } from "react-router-dom";

const Cart = () => {
    const [cart,refetch] = useCart()
    const totalPrice = cart.reduce((preValue,current)=> preValue+current.price,0)

    const axios = useAxios()

    const deleteHandler = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            //   Swal.fire({
            //     title: "Deleted!",
            //     text: "Your file has been deleted.",
            //     icon: "success"
            //   });
            axios.delete(`/carts/${id}`)
            .then(res=>{console.log(res.data)
                refetch()
            if(res.data.deletedCount>0){
                   Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
            })
            }
          });
          
    }

    return (
        <div className="text-center ">
            <SectionTitle heading={"WANNA ADD MORE?"} subHeading={"---My Cart---"}></SectionTitle>
 <div className="bg-[#FFF]">
    <div className="flex justify-evenly items-center">
        <h1 className="font-bold text-lg md:text-3xl">Total orders: {cart.length}</h1>
        <h1 className="font-bold text-lg md:text-3xl">total price: ${totalPrice}</h1>
        {cart.length ? <Link to="/dashboard/payment"><button className="btn bg-[#D1A054]">PAY</button></Link>:
        <button disabled className="btn bg-[#D1A054]">PAY</button>
        }
    </div>

    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
        
        </th>
        <th>Item Image</th>
        <th>Item Name</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
   
     {
        cart?.map((item,idx) =>  <tr key={item._id}>
            <th>
              {idx+1}
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={item?.image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
              </div>
            </td>
            <td>
              <p>{item?.name}</p>
            </td>
            <td>${item?.price}</td>
            <th>
              <button onClick={()=>deleteHandler(item?._id)} className="btn bg-red-600 text-white btn-xs"><FaTrash></FaTrash></button>
            </th>
          </tr>)
     }
     
      
      
    </tbody>
   
    
  </table>
</div>

 </div>
        </div>
    );
};

export default Cart;
import { FaPen, FaTrash } from "react-icons/fa";
import useMenu from "../../../Hook/useMenu";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import useAxios from "../../../useAxios/useAxios";
import { Link } from "react-router-dom";

const ManageItem = () => {
    const [menu, ,refetch] = useMenu()

    const axios = useAxios()
    const deleteItemHandler = (item) =>{
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
            axios.delete(`/menu/${item._id}`)
            .then(res=>{console.log(res.data)
            if(res.data.deletedCount>0){
                   Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              refetch()
            }
            })
            }
          });
    }
    return (
        <div>
            <SectionTitle heading={"MANAGE ALL ITEMS"} subHeading={"---Hurry Up!---"}></SectionTitle>

            <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Item Image</th>
        <th>Item Name</th>
        <th>Price</th>
        <th>Update</th>
        <th>Delete</th>
        
      </tr>
    </thead>
    <tbody>
      {
        menu?.map((item,idx) => <tr key={item._id}>
            <th>{idx+1}</th>
            <td>
                
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={item?.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
</td>
            <td>{item?.name}</td>
            <td>${item?.price}</td>
            <td>
            <Link to={`/dashboard/updateItem/${item._id}`}><button  className="btn bg-[#D1A054] text-white"><FaPen></FaPen></button></Link>
            </td>
            <td>
            <button onClick={()=>deleteItemHandler(item)} className="btn bg-red-600 text-white "><FaTrash></FaTrash></button>
            </td>
          </tr>)
      }
    </tbody>
  </table>
</div>
            </div>
        </div>
    );
};

export default ManageItem;
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../useAxios/useAxios";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { FaTrash, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const Users = () => {

    const axios = useAxios()

    const {data:users=[],refetch} = useQuery({
        queryKey:["users"],
        queryFn: async () => {
            const res = await axios.get("/users")
            return res?.data
        }
    })

    const deleteUserHandler = user => {
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
            axios.delete(`/users/${user._id}`)
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

    const adminHandler = user => {
      console.log(user);
      axios.patch(`/users/admin/${user._id}`)
      .then(res => {
        if(res.data){
            Swal.fire({
                title: "Role Updated!",
                text: `${user.name} now is an Admin`,
                icon: "success"
              });
              refetch()
        }
      })
    }

    return (
        <div>
            <SectionTitle heading={"MANAGE ALL USERS"} subHeading={"---How many??---"}></SectionTitle>
            <h1 className="text-xl md:text-3xl font-bold">All Users: {users?.length}</h1>

<div>

<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
        
      </tr>
    </thead>
    <tbody>
      {
        users?.map((user,idx) => <tr key={user._id}>
            <th>{idx+1}</th>
            <td>{user?.name}</td>
            <td>{user?.email}</td>
            <td>
            {user?.role === "admin" ? "Admin":<button onClick={()=>adminHandler(user)} className="btn bg-red-600 text-white btn-xs"><FaUsers></FaUsers></button>}
            </td>
            <td>
            <button onClick={()=>deleteUserHandler(user)} className="btn bg-red-600 text-white btn-xs"><FaTrash></FaTrash></button>
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

export default Users;
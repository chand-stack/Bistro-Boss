import { useForm } from "react-hook-form";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import usePublicAxios from "../../../useAxios/usePublicAxios";
import useAxios from "../../../useAxios/useAxios";

const apikey = import.meta.env.VITE_IMGBB_API_KEY

const hostingApi = `https://api.imgbb.com/1/upload?key=${apikey}`

const Additem = () => {
    const publicAxios = usePublicAxios()
    const axios = useAxios()
    const { register, handleSubmit } = useForm()
  const onSubmit = async (data) => {
    const image = {image: data.photo[0]}

  const res = await publicAxios.post(hostingApi,image,{
        headers:{
            "content-type": "multipart/form-data"
        }
    })
    console.log(res.data.success)
    if(res.data.success){
        const addrecipe={
            name:data.name,
            recipe:data.recipe,
            image:res.data.data.display_url,
            category:data.category,
            price: parseFloat(data.price)
        }

        const menuRes = await axios.post("/menu",addrecipe)
        console.log(menuRes.data);
    }

}

    return (
        <div>
            <SectionTitle heading={"ADD AN ITEM"} subHeading={"---What's new?---"}></SectionTitle>
            <div>
            <form onSubmit={handleSubmit(onSubmit)} className="md:p-10">

            <div className="w-full">
  <label className="label">
    <span className="label-text text-xl font-semibold">Recipe name*</span>
  </label>
  <input {...register("name")} type="text" placeholder="Recipe name" className="input input-bordered w-full " />
</div>
<div className="md:flex gap-6 items-center">
<div className="w-full">
<label className="label">
<span className="label-text text-xl font-semibold">Category*</span>
  </label>

<select defaultValue="default" {...register("category")} className="select select-bordered w-full">
  <option disabled value="default">Category</option>
  <option value="soup">Soup</option>
  <option value="salad">Salad</option>
  <option value="pizza">Pizza</option>
  <option value="dessert">Dessert</option>
  <option value="drinks">Drinks</option>
</select>
</div>
<div className="w-full">
  <label className="label">
    <span className="label-text text-xl font-semibold">Price*</span>
  </label>
  <input {...register("price")} type="text" placeholder="Recipe price" className="input input-bordered w-full " />
</div>

</div>
<div>
<label className="label">
    <span className="label-text text-xl font-semibold">Recipe Details*</span>
  </label>
<textarea {...register("recipe")} className="textarea textarea-bordered w-full min-h-[200px]" placeholder="Bio"></textarea>
<input type="file" {...register("photo")} className="file-input w-full max-w-xs" />
</div>
      <button className="btn bg-gradient-to-r from-[#835D23] to-[#B58130] text-white">Add Item <FaUtensils></FaUtensils></button>
    </form>
            </div>
        </div>
    );
};

export default Additem;
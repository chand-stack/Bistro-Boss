import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import useAxios from "../../../useAxios/useAxios";
import usePublicAxios from "../../../useAxios/usePublicAxios";

const apikey = import.meta.env.VITE_IMGBB_API_KEY
const hostingApi = `https://api.imgbb.com/1/upload?key=${apikey}`

const UpdateItem = () => {
    const { recipe,price,name,image,category,_id } = useLoaderData()
    const axios = useAxios()
    const publicAxios = usePublicAxios()
    const {handleSubmit, register} = useForm()

    const onSubmit = async (data) => {
        const img = {image: data.photo[0]}

        const res = await publicAxios.post(hostingApi,img,{
            headers:{
                "content-type": "multipart/form-data"
            }
        })
        if(res.data.success){
            const updateItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }

            const upres = await axios.patch(`/menu/${_id}`,updateItem)
            console.log(upres.data);
        }

    }
   

    return (
        <div>
            <SectionTitle heading={"UPDATE ITEM"}></SectionTitle>
            <div>
            <form onSubmit={handleSubmit(onSubmit)} className="md:p-10">

<div className="w-full">
<label className="label">
<span className="label-text text-xl font-semibold">Recipe name*</span>
</label>
<input {...register("name")} defaultValue={name} type="text" placeholder="Recipe name" className="input input-bordered w-full " />
</div>
<div className="md:flex gap-6 items-center">
<div className="w-full">
<label className="label">
<span className="label-text text-xl font-semibold">Category*</span>
</label>

<select defaultValue={category} {...register("category")} className="select select-bordered w-full">
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
<input {...register("price")} defaultValue={price} type="text" placeholder="Recipe price" className="input input-bordered w-full " />
</div>

</div>
<div>
<label className="label">
<span className="label-text text-xl font-semibold">Recipe Details*</span>
</label>
<textarea {...register("recipe")} defaultValue={recipe} className="textarea textarea-bordered w-full min-h-[200px]" placeholder="Bio"></textarea>
<input type="file" {...register("photo")} className="file-input w-full max-w-xs" />
</div>
<button className="btn bg-gradient-to-r from-[#835D23] to-[#B58130] text-white">Update Recipe Details <FaUtensils></FaUtensils></button>
</form>
            </div>
        </div>
    );
};

export default UpdateItem;
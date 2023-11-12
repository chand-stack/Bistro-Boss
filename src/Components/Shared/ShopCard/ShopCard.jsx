
const ShopCard = ({item}) => {
    const {price,recipe,name,image} = item;
    return (
        <div>
            <div className="card  rounded-none">
  <figure><img className="h-[300px] w-full" src={image} alt="Shoes" /></figure>
  <p className="text-white bg-black font-semibold absolute right-0 mt-5 mr-5 py-1 px-3">${price}</p>
  <div className="card-body text-center bg-gray-100">
    <h2 className="card-title flex-grow justify-center">{name}</h2>
    <p className="flex-grow">{recipe}</p>
    <div className="card-actions justify-center">
      <button className="btn btn-outline border-t-0 border-l-0 border-r-0 border-b-2 text-[#BB8506] hover:text-[#BB8506] border-[#BB8506]">ADD TO CART</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ShopCard;
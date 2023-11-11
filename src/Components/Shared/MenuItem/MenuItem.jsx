
const MenuItem = ({item}) => {
    const {price,recipe,name,image} = item;
    return (
        <div className="flex gap-5">
            <img className="h-[100px]" src={image} alt="" style={{borderRadius:"0px 200px 200px 200px"}}/>
          <div>
          <h1 className="text-xl">{name}--------------</h1>
          <p>{recipe}</p>
          </div>
          <p className="text-xl text-[#BB8506]">${price}</p>
        </div>
    );
};

export default MenuItem;
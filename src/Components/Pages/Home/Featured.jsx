import img from '../../../assets/home/featured.jpg'
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';

const Featured = () => {
    return (
        <div className='container mx-auto bg-fixed max-h-[800px] my-28' style={{backgroundImage:`url(${img})`}}>
            <div className='h-full w-full bg-black bg-opacity-50 text-white md:py-20 md:px-28'>
            <SectionTitle heading={"FROM OUR MENU"} subHeading={"---Check it out---"}></SectionTitle>
<div className='grid grid-cols-1 md:grid-cols-2 items-center gap-9'>
    <img className='w-3/4' src={img} alt="" />
    <div>
        <p>{new Date().toLocaleDateString()}</p>
        <p className='text-xl'>WHERE CAN I GET SOME?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
        <button className='btn btn-outline border-white  border-t-0 border-l-0 border-r-0 text-white mt-4 border-b-4'>Read More</button>
    </div>
</div>
            </div>
            
            
        </div>
    );
};

export default Featured;
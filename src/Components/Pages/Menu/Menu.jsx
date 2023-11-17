import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import img from '../../../assets/menu/banner3.jpg'
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import img2 from '../../../assets/menu/dessert-bg.jpeg'
import img3 from '../../../assets/menu/pizza-bg.jpg'
import img4 from '../../../assets/menu/salad-bg.jpg'
import img5 from '../../../assets/menu/soup-bg.jpg'
import useMenu from "../../../Hook/useMenu";
import MenuCategory from "../../Shared/MenuCategory/MenuCategory";


const Menu = () => {
    const [menu] = useMenu()
    const offer = menu?.filter(item => item.category === "offered")
    const dessert = menu?.filter(item => item.category === "dessert")
    const pizza = menu?.filter(item => item.category ===  "pizza")
    const salad = menu?.filter(item => item.category ===  "salad")
    const soup = menu?.filter(item => item.category ===  "soup")
    return (
        <><Helmet>
            <title>Bistro Boss | Menu</title>
        </Helmet>
        <Cover heading={"OUR MENU"} subHeading={"Would you like to try a dish?"} img={img}></Cover>
        <div className="container mx-auto">
            <SectionTitle heading={"TODAY'S OFFER"} subHeading={"---Don't miss---"}></SectionTitle>
           <MenuCategory menu={offer}></MenuCategory>
           <div className="text-center my-12">
           <button className="btn btn-outline border-l-0 border-r-0 border-t-0 border-b-4">ORDER YOUR FAVOURITE FOOD</button>
           </div>
            
            <Cover heading={"DESSERTS"} subHeading={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}img={img2}></Cover>

           <div className="mt-20">
           <MenuCategory menu={dessert}></MenuCategory>
           <div className="text-center my-12">
           <button className="btn btn-outline border-l-0 border-r-0 border-t-0 border-b-4">ORDER YOUR FAVOURITE FOOD</button>
           </div>
           </div>

            <Cover heading={"PIZZA"} subHeading={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}img={img3}></Cover>

            <div className="mt-20">
           <MenuCategory menu={pizza}></MenuCategory>
           <div className="text-center my-12">
           <button className="btn btn-outline border-l-0 border-r-0 border-t-0 border-b-4">ORDER YOUR FAVOURITE FOOD</button>
           </div>
           </div>


            <Cover heading={"SALADS"} subHeading={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}img={img4}></Cover>

            <div className="mt-20">
           <MenuCategory menu={salad}></MenuCategory>
           <div className="text-center my-12">
           <button className="btn btn-outline border-l-0 border-r-0 border-t-0 border-b-4">ORDER YOUR FAVOURITE FOOD</button>
           </div>
           </div>

            <Cover heading={"SOUPS"} subHeading={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}img={img5}></Cover>
            <div className="mt-20">
           <MenuCategory menu={soup}></MenuCategory>
           <div className="text-center my-12">
           <button className="btn btn-outline border-l-0 border-r-0 border-t-0 border-b-4">ORDER YOUR FAVOURITE FOOD</button>
           </div>
           </div>
        </div>
        
        </>
    );
};

export default Menu;
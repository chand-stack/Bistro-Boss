import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import img from '../../../assets/menu/banner3.jpg'
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import img2 from '../../../assets/menu/dessert-bg.jpeg'
import img3 from '../../../assets/menu/pizza-bg.jpg'
import img4 from '../../../assets/menu/salad-bg.jpg'
import img5 from '../../../assets/menu/soup-bg.jpg'


const Menu = () => {
    return (
        <><Helmet>
            <title>Bistro Boss | Menu</title>
        </Helmet>
        <Cover heading={"OUR MENU"} subHeading={"Would you like to try a dish?"} img={img}></Cover>
        <div className="container mx-auto">
            <SectionTitle heading={"TODAY'S OFFER"} subHeading={"---Don't miss---"}></SectionTitle>
            <Cover heading={"DESSERTS"} subHeading={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}img={img2}></Cover>
            <Cover heading={"PIZZA"} subHeading={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}img={img3}></Cover>
            <Cover heading={"PIZZA"} subHeading={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}img={img4}></Cover>
            <Cover heading={"PIZZA"} subHeading={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}img={img5}></Cover>
        </div>
        
        </>
    );
};

export default Menu;
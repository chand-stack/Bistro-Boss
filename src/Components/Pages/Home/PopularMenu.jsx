import useMenu from "../../../Hook/useMenu";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const PopularMenu = () => {
    const [menu] = useMenu()
    const popularMenu = menu.filter(item => item.category === "popular")
    console.log(popularMenu);
    return (
        <div className="container mx-auto">
            <SectionTitle heading={"FROM OUR MENU"} subHeading={"---Check it out---"}></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                    popularMenu?.map(item => <MenuItem key={item._id} item={item}></MenuItem>) 
                }
            </div>
        </div>
    );
};

export default PopularMenu;
import { Helmet } from "react-helmet-async";
import Bannerr from "./Bannerr";
import Category from "./Category";
import Featured from "./Featured";
import Testimonial from "./Testimonial";

const Home = () => {
    return (
        <div>
            <Helmet>
            <title>Bistro Boss | Home</title>
        </Helmet>
            <Bannerr></Bannerr>
            <Category></Category>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;
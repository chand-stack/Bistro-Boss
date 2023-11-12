import { useState } from 'react';
import shopImg from '../../../assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../Hook/useMenu';
const Order = () => {
    const [tabIndex,setTabIndex] = useState(0)
    const [menu] = useMenu()
    const offer = menu.filter(item => item.category === "offered")
    const dessert = menu.filter(item => item.category === "dessert")
    const pizza = menu.filter(item => item.category ===  "pizza")
    const salad = menu.filter(item => item.category ===  "salad")
    const soup = menu.filter(item => item.category ===  "soup")
    return (
        <div>
            <Cover img={shopImg} heading={"OUR SHOP"} subHeading={"Would you like to try a dish?"}></Cover>
            <div className='container mx-auto text-center mt-24 mb-10'>

            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList className="font-bold">
        <Tab>SALAD</Tab>
        <Tab>PIZZA</Tab>
        <Tab>SOUPS</Tab>
        <Tab>DESSERTS</Tab>
        <Tab>DRINKS</Tab>
      </TabList>
      <TabPanel></TabPanel>
      <TabPanel></TabPanel>
    </Tabs>

            </div>
        </div>
    );
};

export default Order;
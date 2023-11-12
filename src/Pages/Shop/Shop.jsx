import { useState } from "react";
import Cover from "../../Shared/Cover/Cover";
import shopCover from '../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './tabStyle.css'
import useMenu from "../../Hooks/useMenu";
import Foods from "../../components/Foods/Foods";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Shop() {
    const { category } = useParams();
    const categories = ["salads", "pizzas", "soups", "desserts", "drinks"];
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const { menus } = useMenu();
    const drinks = menus.filter(menu => menu.category === "drinks");
    const soups = menus.filter(menu => menu.category === "soup");
    const desserts = menus.filter(menu => menu.category === "dessert");
    const salads = menus.filter(menu => menu.category === "salad");
    const pizzas = menus.filter(menu => menu.category === "pizza");

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Shop</title>
            </Helmet>
            <Cover img={shopCover} title="Our Shop" height="h-[520px]"></Cover>
            <Tabs style={{ textAlign: 'center', marginTop: '40px' }} selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className='font-inter'>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soups</Tab>
                    <Tab>Desserts</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <Foods items={salads}></Foods>
                </TabPanel>
                <TabPanel>
                    <Foods items={pizzas}></Foods>
                </TabPanel>
                <TabPanel>
                    <Foods items={soups}></Foods>
                </TabPanel>
                <TabPanel>
                    <Foods items={desserts}></Foods>
                </TabPanel>
                <TabPanel>
                    <Foods items={drinks}></Foods>
                </TabPanel>
            </Tabs>
        </div>
    )
}

import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Extra from "./Extra";
import Review from "./Review";
import AddjobCard from "../component/AddjobCard";
import { useState } from "react";

import { motion } from "framer-motion";

const Home = () => {
    const coffees=useLoaderData();
    const [activeTab, setActiveTab] = useState('All Jobs');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    }

    return (
        <div>

            <Banner></Banner>

            <div className="grid grid-cols-5 gap-4 mt-5">
                {['All Jobs', 'Remote Job','Hybrid', 'On Site Job', 'Part Time'].map((tab, index) => (
                    <button 
                        key={index} 
                        className={`border-b-4 p-2 text-xl font-bold ${activeTab === tab ? 'border-blue-600' : 'border-transparent'}`}
                        onClick={() => handleTabClick(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className="mt-8">
                <h2 className="text-3xl font-bold mb-5 flex justify-center items-center m-8">Job by category</h2>   
                {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"> */}
                <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {coffees.map(coffee => 
                        (activeTab === 'All Jobs' || activeTab === coffee.category) &&
                        <AddjobCard
                            key={coffee._id}
                            coffee={coffee}
                        >
                        </AddjobCard>
                    )}
                {/* </div>  */}
                </motion.div>
            </div>

            <div>
                <Review></Review>
            </div>
            <div>
                <Extra></Extra>
            </div>
        </div>
        
        
    );
};

export default Home;
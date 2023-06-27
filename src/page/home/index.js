import React, { useState } from 'react'
import Header from '../../components/common/header';
import TabOptions from '../../components/common/tabOptions';
import Footer from '../../components/common/footer';
import Delivery from '../../components/delivery';
import NightLife from '../../components/nightlife';
import DiningOut from '../../components/diningout';

const HomePage = () => {

    const [activeTab, SetActiveTab] = useState("Delivery")

  return (
    <div>
        <Header/>
        <TabOptions activeTab={activeTab} SetActiveTab={SetActiveTab} />
        {getCorrectScreen(activeTab)}
        <Footer/>
    </div>
  )
};

const getCorrectScreen=(tab)=>{
    switch(tab){
        case "Delivery":
            return <Delivery/>
        case "DiningOut":
            return <DiningOut/>
        case "NightLife":
            return <NightLife/>
        default:
            return <DiningOut/>
    }
}

export default HomePage;
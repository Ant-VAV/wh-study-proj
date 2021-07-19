import React from 'react';
import './App.css';
import '../index.html';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Menu from "../components/Menu/Menu";
import CampaignList from "../components/CampaignList/CampaignList";

export default function App() {
  return <div className={'page'}>
    <Header isCampaignSelect={true}/>
    <Menu/>
    <div className={'content'}>
      <CampaignList/>
    </div>
    <Footer/>
  </div>;
}

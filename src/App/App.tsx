import React from 'react';
import './App.css';
import '../index.html';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Menu from "../components/Menu/Menu";

export default function App() {
  return <div className={'page'}>
    <Header isCampaignSelect={true}/>
    <Menu/>
    <div className={'content'}>Тут контент</div>
    <Footer/>
  </div>;
}

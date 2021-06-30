import React from 'react';
import './App.css';
import '../index.html';
// @ts-ignore
import logo from '../sources/logo.png';

export default function App() {
  return <div className={'page'}>
    <div className={'header'}>
      <div className={'headerContent'}>
        <div className={'logoAndSelector'}>
          <img src={logo} width={'125px'} height={'100px'} alt='logo'/>
          <button className={'selectCampaignButton'}>Выбор кампании</button>
        </div>
        <div className={'loginLink'}><a href={'#'}>Вход/Регистрация</a></div>
      </div>
    </div>
    <div className={'greyLine'}>
      <div className={'lineMenu'}>
        Будут кнопки
      </div>
    </div>

    <div className={'content'}>Тут контент</div>
    <div className={'footer'}>Тут будет футер</div>
  </div>;
}

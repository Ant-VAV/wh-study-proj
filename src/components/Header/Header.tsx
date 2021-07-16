import React from "react";
import logo from "../../sources/logo.png";
import './Header.css';

interface IHeaderProps {
  isCampaignSelect: boolean
}

export default function Header(props: IHeaderProps) {
  return <div className={'header'}>
    <div className={'headerContent'}>
      <div className={'logoAndSelector'}>
        <img src={logo} alt='logo'/>
        {props.isCampaignSelect && <button className={'selectCampaignButton'}>Выбор кампании</button>}
      </div>
      <div className={'loginLink'}><a href={'#'}>Вход/Регистрация</a></div>
    </div>
  </div>
}

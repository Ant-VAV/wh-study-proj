import React from "react";
import { ICampaignItem } from "../../helpers/interfaces";
import './CampaignItem.css';

interface ICampaignItemProp {
  element: ICampaignItem
}

export default function CampaignItem(props: ICampaignItemProp) {
  const {campaignName, campaignDescription, campaignLogo} = props.element;
  return <div className={'campaignItem'}>
    <img className={'campaignImg'} src={`data:image/jpeg;base64,${campaignLogo}`} alt={'Campaign Logo Classified'}/>
    <div className={'campaignDescriptionBlock'}>
      <span className={'campaignName'}>{campaignName}</span>
      <span className={'campaignDescription'}>{campaignDescription}</span>
    </div>
  </div>
}

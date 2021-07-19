import React from "react";
import { ICampaignItem } from "../../helpers/interfaces";
import './CampaignItem.css';

interface ICampaignItemProp {
  element: ICampaignItem
}

export default function CampaignItem(props: ICampaignItemProp) {
  const {campaignName, campaignDescription} = props.element;
  return <>
    <h2>{campaignName}</h2>
    <span>{campaignDescription}</span>
  </>
}

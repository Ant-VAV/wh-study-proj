import React, { useEffect, useState } from "react";
import CampaignItem from "./CampaignItem";
import { getCampaigns } from "../../helpers/dataProvider";
import { ICampaignItem } from "../../helpers/interfaces";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import './CampaignList.css';

export default function CampaignList() {
  const [campaigns, setCampaigns] = useState<ICampaignItem[]>();

  useEffect(() => {
    getCampaigns().then((data) => setCampaigns(data));
  }, []);

  return <div className={'campaignList'}>
    {campaigns ? campaigns.map((elem) => {
        return <CampaignItem element={elem}/>
      }) :
      <SkeletonTheme color={'#B1B1B1'}>
        <div className={'skeletons'}>
          <div className={'imgSkeleton'}>
            <Skeleton width={123} height={123}/>
          </div>
          <div className={'txtSkeletons'}>
            <Skeleton height={40}/>
            <Skeleton height={83}/>
          </div>
        </div>

      </SkeletonTheme>}
  </div>
}

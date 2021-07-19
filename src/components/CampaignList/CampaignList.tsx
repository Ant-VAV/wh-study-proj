import React, { useState } from "react";
import CampaignItem from "./CampaignItem";
import { getCampaigns, getCampaignsSync } from "../../helpers/dataProvider";
import { ICampaignItem } from "../../helpers/interfaces";

export default function CampaignList() {
  const [campaigns, setCampaigns] = useState<ICampaignItem[]>(getCampaignsSync());

  function getData() {
    getCampaigns().then((data) => setCampaigns(data));
  }

  return <div>
    {campaigns && campaigns.map((elem) => {
      return <CampaignItem element={elem} />
    })}
  </div>
}

import { CampaignItem } from "./interfaces";
const campaigns = require('../sources/campaignInfo.json');

export function getCampaigns(): CampaignItem[] | undefined {
  return campaigns;
}

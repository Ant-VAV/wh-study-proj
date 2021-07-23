import { ICampaignItem } from "./interfaces";
const campaigns = require('../sources/campaignInfo.json');

const delay = (ms: number) => new Promise((resolved) => setTimeout(resolved, ms));

export function getCampaigns(): Promise<ICampaignItem[]> {
  return Promise.all([delay(5000)]).then(() => campaigns)
}

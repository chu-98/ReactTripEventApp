import { QueryFunction } from "react-query";

const BASE_URL = "https://69cee40f-f372-4734-a2ff-a043da89d0b2.mock.pstmn.io";

export interface Activity {
  id: number;
  name: string;
  trips: [
    {
      id: number;
      location: string;
      title: string;
      ticket_type: number;
      discount_percent: number;
      price_discounted: number;
    }
  ];
}

export interface ActivityResponse {
  results: Activity[];
}

interface Fetchers<T> {
  [key: string]: QueryFunction<T>;
}

export const activityAPI: Fetchers<ActivityResponse> = {
  activity: () => fetch(`${BASE_URL}/activity`).then(res => res.json()),
};

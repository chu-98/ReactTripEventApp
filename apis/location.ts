import { QueryFunction } from "react-query";

const BASE_URL = "https://69cee40f-f372-4734-a2ff-a043da89d0b2.mock.pstmn.io";

export interface Locations {
  id: number;
  name: string;
  desc: string;
  sights: string;
}

export interface LocationsResponse {
  results: Locations[];
}

interface Fetchers<T> {
  [key: string]: QueryFunction<T>;
}

export const locationAPI: Fetchers<LocationsResponse> = {
  location: () => fetch(`${BASE_URL}/location`).then(res => res.json()),
};

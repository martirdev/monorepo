import useSWR from 'swr';

import {geoSuggestStreet} from './request';

export const useGeoSuggest = (search: string) => {
  return useSWR({search, name: 'GEO_SUGGEST'}, async ({search}) => (search ? await geoSuggestStreet(search) : null));
};

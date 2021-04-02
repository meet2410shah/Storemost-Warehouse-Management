import fetchData from '../../network/fetchData';
import { auth } from '../../network/api-routes';

export default async () => {
  const fetchOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const url = auth.hello;
  const response = await fetchData(url, fetchOptions);
  return response;
};

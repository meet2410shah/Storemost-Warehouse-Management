/**
 *
 * Author: MEET SHAH
 * Email: meet2410shah@gmail.com
 * Website: meet2410shah.herokuapp.com
 *
 */

import HTTPError from './HTTPError.js';

export default async (url, {
  method, headers, body, file,
}) => {
  const data = new FormData();
  if (body) {
    Object.entries(body).forEach((key, value) => {
      data.set(key, value);
    });
  }
  data.set('file', file);
  const fetchOptions = {
    method,
    body: data,
  };
  const response = await fetch(url, fetchOptions);
  if (!response.ok) {
    throw new HTTPError(response);
  }
  const json = await response.json();
  return json;
};

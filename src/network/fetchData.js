/**
 *
 * Author: MEET SHAH
 * Email: meet2410shah@gmail.com
 * Website: meet2410shah.herokuapp.com
 *
 */

import HTTPError from "./HTTPError.js";
import cookie from "react-cookies";

const requiredBody = ["GET", "POST", "PUT", "DELETE"];

export default async (url, { method, headers, body, ...otherOptions }) => {
  const fetchOptions = {
    method,
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body,
    ...otherOptions,
  };
  if (requiredBody.includes(method)) {
    fetchOptions.body = JSON.stringify(body);
  }
  console.log(url);
  const response = await fetch(url, fetchOptions);
  if (!response.ok) {
    throw new HTTPError(response);
  }
  const json = await response.json();
  return json;
};

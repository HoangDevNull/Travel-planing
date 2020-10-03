/**
 * Todo: Calling api in here
 */

import axios from "axios";
import { API } from "./constant";

export const request = (url, method, payload = {}) => {
  return axios({
    method: method,
    url: `${API}${url}`,
    data: payload
  });
};

export const authRequest = (url, method, token, payload = {}) => {
  return axios({
    method: method,
    url: `${API}${url}`,
    data: payload,
    headers: {
      Authorization: token
    }
  });
};

/**
 * Todo: Calling api in here
 */

import axios from 'axios';
import { API, IMAGE_UPLOAD_API } from './constant';

export const ROOT_API = API;

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

export const uploadRequest = (file) => {
  let formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'f14nw4lv');
  return axios({
    url: IMAGE_UPLOAD_API,
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: formData
  });
};

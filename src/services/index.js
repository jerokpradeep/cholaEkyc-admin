let isLive = true
import store from "../store";
export function getUrl(){
    return {
        BASEURL: isLive ? 'https://erp.cholasecurities.com/' : 'https://erp.cholasecurities.com/',
    }
}

export function authHeader() {
  let userToken = store.state.auth.authToken;
  let userId = store.state.auth.userId;
  let headers;
  if (userToken && userId) {
    headers = {
      Authorization: `token 1906953e49c52ed:f0f7652d463f8d0`,
    };
  } else {
    headers = {
      'Content-Type': 'application/json',
    };
  }
  return headers;
}

export function resetAuthHeader() {
  let token = store.state.auth.accessToken;
  let headers;
  if (token) {
    headers = { Authorization: 'token 1906953e49c52ed:f0f7652d463f8d0'};
  } else {
    headers = {
      'Content-Type': 'application/json',
    };
  }
  return headers;
}

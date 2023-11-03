let isLive = true
import store from "../store";
export function getUrl(){
    return {
        BASEURL: isLive ? 'https://erp.cholasecurities.com/' : 'https://erp.cholasecurities.com/',
    }
}

export function authHeader() {
  let userToken = store.state.login.userData.token;
  let headers;
  if (userToken) {
    headers = {
      Authorization: userToken,
    };
  } else {
    headers = {
      'Content-Type': 'application/json',
    };
  }
  return headers;
}

export function resetAuthHeader() {
  let token = store.state.login.userData.token;
  let headers;
  if (token) {
    headers = { Authorization: token};
  } else {
    headers = {
      'Content-Type': 'application/json',
    };
  }
  return headers;
}

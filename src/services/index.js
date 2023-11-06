let isLive = true
import store from "../store";
export function getUrl(){
    return {
        ERPBASEURL: isLive ? 'https://erp.cholasecurities.com/' : 'https://erp.cholasecurities.com/',
        WRAPPERBASEURL: isLive ? 'https://uattrade.cholasecurities.com/uat/ekycAdmin/ekyc' : 'https://uattrade.cholasecurities.com/uat/ekycAdmin/ekyc'
    }
}

export function authHeader() {
  let userToken = store.state.login.userData.token;
  let header = { }
  if (userToken) {
    header = { 'Authorization': `${userToken}` };
  }
  const requestOptions = {
    headers: header,
  };
  return requestOptions
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

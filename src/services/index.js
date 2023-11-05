let isLive = true
import store from "../store";
export function getUrl(){
    return {
        ERPBASEURL: isLive ? 'https://erp.cholasecurities.com/' : 'https://erp.cholasecurities.com/',
        WRAPPERBASEURL: isLive ? 'https://ekyc.cholasecurities.com/erpEkyc/CholaERPWrapper/ekyc' : 'https://ekyc.cholasecurities.com/erpEkyc/CholaERPWrapper/ekyc'
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
  console.log(requestOptions , 'requestOptions requestOptions');
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

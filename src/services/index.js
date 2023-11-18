let isLive = true
import store from "../store";
export function getUrl(){
    return {
        ERPBASEURL: isLive ? 'https://erp.cholasecurities.com/' : 'https://erp.cholasecurities.com/',
        // BOBASEURL: isLive ? 'https://uattrade.cholasecurities.com/uat/ekycAdmin/' : 'https://uattrade.cholasecurities.com/uat/ekycAdmin/',
        WRAPPERBASEURL: isLive ?  `https://devekyc.cholasecurities.com/uat/ekycAdmin/` : `https://devekyc.cholasecurities.com/uat/ekycAdmin/`
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


export function xHeader() {
  let header = { 'X-AUTH-TOKEN': 'Bearer Y2hvbGFfYXBpfFZsWlNTMkp0VmtaTldFWlZZa1ZLY0ZWc1ZrWmtNVkp6VlcxR1VtSlZOVWRaVkVvd1ZFZEdkRlJVUWxWTlZuQkVWVlpXZDFKR1ZsVk5SREE5' }
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

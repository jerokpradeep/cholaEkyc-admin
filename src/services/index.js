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
  let sid = store.state.login.userData.sid;
  let system_user = store.state.login.userData.system_user
  let header = { }
  if (userToken) {
    header = { withCredentials: true ,'Authorization': `${userToken}`, 'Cookie': `sid=${sid};system_user=${system_user}` };
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

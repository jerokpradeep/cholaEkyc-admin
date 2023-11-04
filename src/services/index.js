let isLive = true
import store from "../store";
export function getUrl(){
    return {
        BASEURL: isLive ? 'https://erp.cholasecurities.com/' : 'https://erp.cholasecurities.com/',
    }
}

export function authHeader() {
  let userToken = store.state.login.userData.token;
  let header = { }
  if (userToken) {
    header = { 'Authorization': `${userToken}`};
    // , withCredentials: true,crossDomain: true  , 'Cookie' : `system_user=${store.state.login.userData.system_user};sid=${store.state.login.userData.sid}`
    // , 'Cookie' : `system_user=${store.state.login.userData.system_user};sid=${store.state.login.userData.sid}`
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

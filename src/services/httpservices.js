import { getUrl, authHeader } from './index.js';
import axios from 'axios';

const WRAPPERAXIOS = axios.create({
  baseURL: getUrl().WRAPPERBASEURL,
});

const ERPAXIOS = axios.create({
  baseURL: getUrl().ERPBASEURL,
});

const httpService = {
    getOpportunityList, login, getApprovalList, updateDocStatus, getCustomerData,callLogout, getStageDetails, assignOpportunity,getDocument,pushToBo
}

export default httpService

function getOpportunityList(payload) {
    return WRAPPERAXIOS.get(`ekyc/get_oppr_details/?token=${payload.token}&sessId=${payload.sessId}&userId=${payload.userId}`, authHeader())
}

function login(payload) {
  return ERPAXIOS.get(`api/method/cs_bo.custom_api.ekyc_login.login?email=${payload.emailId}&password=${payload.password}`)
}


function getApprovalList(payload) {
  return WRAPPERAXIOS.get(`ekyc/get_approve_oppr_details?token=${payload.token}&sessId=${payload.sessId}&userId=${payload.userId}`)
}

function updateDocStatus(payload) {
  return WRAPPERAXIOS.get(`ekyc/update_document_details?${payload}`)
}

function getCustomerData(payload) {
  return WRAPPERAXIOS.get(`ekyc/opportunity?id=${payload.id}&token=${payload.token}&sessId=${payload.sessId}&userId=${payload.userId}`, authHeader())
}

function callLogout(){
  return ERPAXIOS.get(`api/method/logout`)
}

function getStageDetails(payload) {
  return WRAPPERAXIOS.get(`ekyc/get_approval_details?id=${payload.id}&userId=${payload.userId}&token=${payload.token}&sessId=${payload.sessId}`)
}

function assignOpportunity(payload) {
  return WRAPPERAXIOS.get(`ekyc/assignOpportunityLatest?id=${payload.id}&userId=${payload.userId}&token=${payload.token}&sessId=${payload.sessId}&assignTo=${payload.assignTo}`)
}

function getDocument(payload){
  return WRAPPERAXIOS.get(`Download/getFile?${payload}` , {responseType: 'blob'})
}

function pushToBo(payload){
  return WRAPPERAXIOS.post(`LDIntegration/ldCheckPan?${payload}`, {}, {headers: {'X-AUTH-TOKEN' :'Bearer Y2hvbGFfYXBpfFZsWlNTMkp0VmtaTldFWlZZa1ZLY0ZWc1ZrWmtNVkp6VlcxR1VtSlZOVWRaVkVvd1ZFZEdkRlJVUWxWTlZuQkVWVlpXZDFKR1ZsVk5SREE5'}})
}
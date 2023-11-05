import { getUrl, authHeader } from './index.js';
import axios from 'axios';

const WRAPPERAXIOS = axios.create({
  baseURL: getUrl().WRAPPERBASEURL,
});

const ERPAXIOS = axios.create({
  baseURL: getUrl().ERPBASEURL,
});

const httpService = {
    getOpportunityList, login, getApprovalList, updateDocStatus, getCustomerData,callLogout, getStageDetails, assignOpportunity
}

export default httpService

function getOpportunityList(payload) {
    return WRAPPERAXIOS.get(`get_oppr_details/?token=${payload.token}&sessId=${payload.sessId}&userId=${payload.userId}`, authHeader())
}

function login(payload) {
  return ERPAXIOS.get(`api/method/cs_bo.custom_api.ekyc_login.login?email=${payload.emailId}&password=${payload.password}`)
}


function getApprovalList(payload) {
  return WRAPPERAXIOS.get(`get_approve_oppr_details?token=${payload.token}&sessId=${payload.sessId}`)
}

function updateDocStatus(payload) {
  return WRAPPERAXIOS.get(`update_document_details?${payload}`)
}

function getCustomerData(payload) {
  return WRAPPERAXIOS.get(`opportunity?id=${payload.id}&token=${payload.token}&sessId=${payload.sessId}&userId=${payload.userId}`, authHeader())
}

function callLogout(){
  return ERPAXIOS.get(`api/method/logout`)
}

function getStageDetails(payload) {
  return WRAPPERAXIOS.get(`get_approval_details?id=${payload.id}&userId=${payload.userId}&token=${payload.token}&sessId=${payload.sessId}`)
}

function assignOpportunity(payload) {
  return WRAPPERAXIOS.get(`assignOpportunityLatest?id=${payload.id}&userId=${payload.userId}&token=${payload.token}&sessId=${payload.sessId}&assignTo=${payload.assignTo}`)
}
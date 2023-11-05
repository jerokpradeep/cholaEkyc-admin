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
    return WRAPPERAXIOS.get(`get_oppr_details/?token=${payload.userId}&sessId=${payload.sessId}&userId=${payload.userId}`, authHeader())
}

function login(payload) {
  return ERPAXIOS.get(`api/method/cs_bo.custom_api.ekyc_login.login?email=${payload.emailId}&password=${payload.password}`)
}

function getApprovalList(payload) {
  return WRAPPERAXIOS.get(`get_approve_oppr_details?token=${payload.userId}&sessId=${payload.sessId}`)
}

function updateDocStatus(payload) {
  return WRAPPERAXIOS.get(`update_document_details?id=${payload?.id}&status=${payload?.status}&document_type=${payload?.docType}
  &remarks=${payload.remarks}&attachment_type=${payload.attachmentType}&nominee_no=${payload.nomineeNo}&token=${payload.token}&sessId=${payload.sessId}`)
}

function getCustomerData(customer_id) {
  return WRAPPERAXIOS.get(`opportunity?id=${customer_id}&token=${payload.token}&sessId=${payload.sessId}&userId=${payload.userId}`, authHeader())
}

function callLogout(){
  return ERPAXIOS.get(`api/method/logout`)
}

function getStageDetails(customer_id) {
  return WRAPPERAXIOS.get(`get_approval_details?id=${customer_id}&userId=${payload.userId}&token=${payload.token}&sessId=${payload.sessId}`)
}

function assignOpportunity(customer_id) {
  return WRAPPERAXIOS.get(`assignOpportunity?id=${customer_id}&userId=${payload.userId}&token=${payload.token}&sessId=${payload.sessId}`)
}
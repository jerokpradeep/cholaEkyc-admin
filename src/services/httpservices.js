import { getUrl, authHeader } from './index.js';
import axios from 'axios';

const AXIOS = axios.create({
  baseURL: getUrl().BASEURL
});

const httpService = {
    getOpportunityList, login, getApprovalList, updateDocStatus, getCustomerData,callLogout, getStageDetails
}

export default httpService

function getOpportunityList() {
    return AXIOS.get(`api/method/cs_bo.custom_api.ekyc_admin.get_oppr_details`)
}

function login(payload) {
  return AXIOS.get(`api/method/cs_bo.custom_api.ekyc_login.login?email=${payload.emailId}&password=${payload.password}`)
}

function getApprovalList() {
  return AXIOS.get(`api/method/cs_bo.custom_api.ekyc_admin.get_approve_oppr_details`, authHeader())
}

function updateDocStatus(payload) {
  return AXIOS.get(`api/method/cs_bo.custom_api.ekyc_post_approval_status.update_document_details?id=${payload?.id}&status=${payload?.status}&document_type=${payload?.docType}&remarks=${payload.remarks}&attachment_type=${payload.attachmentType}&nominee_no=${payload.nomineeNo}`)
}

function getCustomerData(customer_id) {
  return AXIOS.get(`api/resource/Opportunity/${customer_id}`, authHeader())
}

function callLogout(){
  return AXIOS.get(`api/method/logout`)
}

function getStageDetails(customer_id) {
  return AXIOS.get(`api/method/cs_bo.custom_api.ekyc_approval_stage.get_approval_details?id=${customer_id}`)
}
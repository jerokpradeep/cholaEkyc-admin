import { getUrl } from './index.js';
import axios from 'axios';

const AXIOS = axios.create({
  baseURL: getUrl().BASEURL,
});

const httpService = {
    getOpportunityList, login, getApprovalList, updateDocStatus
}

export default httpService

function getOpportunityList() {
    return AXIOS.get(`api/method/cs_bo.custom_api.ekyc_admin.get_oppr_details`)
}

function login(payload) {
  return AXIOS.get(`api/method/cs_bo.custom_api.ekyc_login.login?email=${payload.emailId}&password=${payload.password}`)
}

function getApprovalList() {
  return AXIOS.get(`api/method/cs_bo.custom_api.ekyc_admin.get_approve_oppr_details`)
}

function updateDocStatus(payload) {
  return AXIOS.get(`api/method/cs_bo.custom_api.ekyc_post_approval_status.update_document_details?id=${payload?.id}&status=${payload?.status}&document_type=${payload?.docType}&remarks=${payload.remarks}&attachment_type=${payload.attachmentType}&nominee_no=${payload.nomineeNo}`)
}
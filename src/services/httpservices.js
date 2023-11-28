import { getUrl, authHeader, xHeader } from './index.js';
import axios from 'axios';

const WRAPPERAXIOS = axios.create({
  baseURL: getUrl().WRAPPERBASEURL,
});

const ERPAXIOS = axios.create({
  baseURL: getUrl().ERPBASEURL,
});

const httpService = {
  getOpportunityList, login, getApprovalList, updateDocStatus, getCustomerData, callLogout, getStageDetails, assignOpportunity,
  getDocument, pushToBo, getDocs, approveDocs, sendRejectionMail, checkBoStatus, nseUccUpload, bseUccUpload, kraUpload, kraFileUpload,
  bseMfUccUpload, bseFatcaUpload, bseStarAOF, pushIwapp, sendFinalMail, boThreadPush, generateCkyc,genrateUrl
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
  return WRAPPERAXIOS.post(`LDIntegration/ldCheckPan?${payload}`, {}, xHeader())
}

function getDocs(payload) {
  return WRAPPERAXIOS.get(`ekyc/getStatus?id=${payload.id}&userId=${payload.userId}&token=${payload.token}&sessId=${payload.sessId}&assignTo=${payload.assignTo}`)
}

function approveDocs(payload) {
  return WRAPPERAXIOS.get(`ekyc/getDocStatus?${payload}`)
}

function sendRejectionMail(payload) {
  return WRAPPERAXIOS.get(`admin/sendRejectionMail?${payload}`)
}

function checkBoStatus(payload) {
  return WRAPPERAXIOS.get(`CheckApi/checkApiStatus?${payload}`)
}

function nseUccUpload(payload) {
  return WRAPPERAXIOS.get(`nse/nseUpload?${payload}`)
}

function bseUccUpload(payload) {
  return WRAPPERAXIOS.get(`bse/bseUpload?${payload}`)
}

function kraUpload(payload) {
  return WRAPPERAXIOS.get(`kra/kraUpload?${payload}`)
}

function kraFileUpload(payload) {
  return WRAPPERAXIOS.get(`kra/kraFileUpload?${payload}`)
}

function bseMfUccUpload(payload) {
  return WRAPPERAXIOS.get(`BSEMF/BSE?${payload}`)
}

function bseFatcaUpload(payload) {
  return WRAPPERAXIOS.get(`BSEFatca/Upload?${payload}`)
}

function bseStarAOF(payload) {
  return WRAPPERAXIOS.get(`bse/bseStarAOF?${payload}`)
}

function pushIwapp(payload) {
  return WRAPPERAXIOS.get(`iWapp/pushIwapp?${payload}`)
}

function sendFinalMail(payload) {
  return WRAPPERAXIOS.get(`account/sendAccDocMail?${payload}`)
}

function boThreadPush(query, payload) {
  return WRAPPERAXIOS.post(`Thread/pushMethods?${query}`, payload)
}
function generateCkyc(query) {
  return WRAPPERAXIOS.get(`iWapp/genCKYCFiles?${query}`)
}

function genrateUrl(query, payload) {
  return WRAPPERAXIOS.post(`referral/setReferral?${query}`, payload)
}
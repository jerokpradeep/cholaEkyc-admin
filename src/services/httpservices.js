import { getUrl } from './index.js';
import axios from 'axios';

const AXIOS = axios.create({
  baseURL: getUrl().BASEURL,
});




const httpService = {
    getOpportunityList
}
export default httpService
function getOpportunityList(){
    return AXIOS.get(`api/method/cs_bo.custom_api.ekyc_admin.get_oppr_details`)
}
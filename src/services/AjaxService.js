import axios from 'axios';

import Consts from '../Consts';

axios.defaults.baseURL = Consts.ENDPOINT_URL;
axios.defaults.headers.post['Content-Type'] = 'application/json';

let AjaxService = {
    get: (url, params) => axios.get(url, params),
    put: (url, params) => axios.put(url, params),
    post: (url, params) => axios.post(url, params),
    delete: (url, params) => axios.delete(url, params)
};

export default AjaxService;
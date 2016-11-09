/**
 * Created by JIANBO on 2016/11/9.
 */
require('es6-promise').polyfill();
import axios from 'axios'
import {API_ROOT} from '../config'
import {getCookie,signOut} from '../utils/authService'

axios.defaults.baseURL=API_ROOT;
axios.defaults.withCredentials=true;

//请求拦截
axios.interceptors.request.use(function (config) {

});

//返回拦截
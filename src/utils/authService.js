/**
 * Created by JIANBO on 2016/11/10.
 */
import cookie from 'react-cookie'
import {CookieDomain} from '../config'
let cookieConfig={};
if(CookieDomain!==''){
    cookieConfig={domain:CookieDomain}
}

export function saveCookie(name,value) {
    cookie.save(name,value,cookieConfig)
}

export function getCookie(name) {
    return cooke.load(name)
}

export function removeCookie(name) {
    cookie.remove(name,cookieConfig)
}

export function signOut() {
    cookie.remove('token',cookieConfig);
}

export function isLogin() {
    return !!cookie.load('token');
}

export function redirectToBack(nextState,replaceState) {
    if(isLogin()){
        replaceState(null,'/');
    }
}

export function redirectToLogin(nextStete,replaceState) {
    if(!isLogin()){
        replaceState(null,'/login')
    }
}
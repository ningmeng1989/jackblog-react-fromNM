/**
 * Created by JIANBO on 2016/11/7.
 */
import * as types from './types'
import api from '../api'
import {getUserInfo} from './auth'

//获取标签列表
export const getTagList=()=>{
    return {
        type:types.TAG_LIST,
        promise:api.getTagList()
    }
};

//更改options
export const changeOptions=(option)=>({type:types.CHANGE_OPTIONS,option:option})

// 切换Like
function receiveToggleLike(json) {
    return{
        type:types.TOGGLE_LIKE_SUCCESS,
        like_count:json.count,
        isLike:json.isLike
    }
}

export function toggleLike(aid) {
    return(dispatch,getState)=>{
        return api.toggleLike(aid)
            .then(response=>({json:response.data,status:response.statusText}))
            .then(({json,status})=>{
                if(status!=='OK'){
                    return dispatch({type:types.TOGGLE_LIKE_FAILURE})
                }
                dispatch(getUserInfo());
                return dispatch(receiveToggleLike(json))
            })
            .catch(error=>{
                return dispatch({type:types.TOGGLE_LIKE_FAILURE})
            })
    }
}

// 获取文章列表
export const getArticleList=(isAdd=true)=>{
    return (dispatch,getState)=>{
        const options=getState().options.toJS();
        return dispatch({
            type:types.ARTICLE_LIST,
            itemsPerpage:options.itemsPerpage,
            promise:api.getArticleList(options),
            isAdd:isAdd
        })
    }
};

// 获取文章详情
export const getArticleDetail=(id)=>{
    return (dispatch,getState)=>{
        const auth=getState().auth.toJS();
        return api.getArticleDetail(id)
            .then(response=>({json:response.data,status:response.statusText}))
            .then((json,status)=>{
                let isLike=false;
                let article=json.data;

            })
    }
};















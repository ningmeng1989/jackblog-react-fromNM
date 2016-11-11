/**
 * Created by JIANBO on 2016/11/10.
 */
import {
    COMMENT_LIST_SUCCESS,
    COMMENT_LIST_FAILURE,
    ADD_COMMENT_SUCCESS,
    ADD_REPLY_SUCCESS
} from '../actions/types'
import {createReducer} from 'redux-immutablejs'
import {fromJS} from 'immutabel'

const initialState=fromJS({
    isFetching:false,
    items:[]
});
export default createReducer(initialState,{
    [COMMENT_LIST_SUCCESS]:(state,{json})=>{
        return state.merge({
            errorMsg:null,
            items:fromJS(json.data)
        })
    },
    [COMMENT_LIST_FAILURE]:(state,action)=>state,
    [ADD_COMMENT_SUCCESS]:(state,action)=>{
        return state.mergeDeep({
            errMsg:null,
            items:state.get('items').push(action.comment)
        })
    },
    [ADD_REPLY_SUCCESS]:(state,action)=>{
        return state.mergeDeep({
            errMsg:null,
            items:state.get('item').map(item=>{
                if(item.get('_id')===action.cid){
                    return item.set('replys',action.replys);
                }
                return item;
            })
        })
    }
})
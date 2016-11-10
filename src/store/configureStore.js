/**
 * Created by JIANBO on 2016/11/10.
 */
import {
    createStore,
    compose,
    applyMiddleware
} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {routerMiddleware} from 'react-router-redux'
import {persistState} from 'redux-devtools'
import createLogger from 'redux-logger'
import {Iterable} from 'immutable'
import promiseMiddleware from 'immutable'
import DevTools from '../components/DevTools'
import routReducer from '../reducers'

export default function configureStore(initialState,history) {
    const stateTransformer=(state)=>{
        let newState={};
        Object.keys(state).froEach(x=>{
            if(Iterable.isIterable(state[x])){
                newState[x]=state[x].toJS();
            }else{
                newState[x]=state[x]
            }
        });
        return newState;
    };
    let middleware=[thunkMiddleware,promiseMiddleware,routerMiddleware(history)];
    let finalCreateStore;
    if(__DEVCLIENT__){
        if(__DEVLOGGER__){
            middleware.push(createLogger({stateTransformer}))
        }
        finalCreateStore=compose(
            applyMiddleware(...middleware),
            window.devToolsExtension?window.devToolsExtension():__DEVTOOLS__?DevTools.instrument():f=>f,
            persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
        )
    }else{
        finalCreateStore=compose(applyMiddleware(...middleware));
    }

    const store=finalCreateStore(createStore)(rootReducer,initialState);

    if(module.hot){
        module.hot.accept('../reducer',()=>{
            const nextReducer=require('../reducers');
            store.replaceReducer(nextReducer);
        })
    }

    return store;
}
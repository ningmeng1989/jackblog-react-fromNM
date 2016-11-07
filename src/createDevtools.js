/**
 * Created by JIANBO on 2016/11/7.
 */
import React from 'react'
import {render} from 'react-dom'
import DevTools from './components/DevTools'

export default function createDevTools(store){
    if(__DEVCLIENT__&&__DEVTOOLS__&&!window.devToolsExtension){
        setTimeout(()=>render(
            <DevTools store={store} />,
            window.document.body.appendChild(document.createElement('div'))
        ),10)
    }
}
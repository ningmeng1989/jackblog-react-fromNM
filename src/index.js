import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory,hashHistory } from 'react-router'
import {Provider} from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import routes from './routes'
import configureStore from './store/configureStore'
import 'font-awesome/css/font-awesome.css'
import 'bootstrap/dist/css/bootstrap.css'
// import 'jackblog-sass/dist/index.css'
import 'react-s-alert/dist/s-alert-default.css'
import './assets/styles/index.css'
// import createDevTools from './createDevtools'

const initialState = window.__INITIAL_STATE__
const store = configureStore(initialState,hashHistory)
const history = syncHistoryWithStore(hashHistory, store)

// createDevTools(store)

render(
  <Provider store={store}>
    <Router history={history}>
      {routes()}
    </Router>
  </Provider>,
  document.getElementById('root')
)

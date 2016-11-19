import React from 'react'
import { render } from 'react-dom'
import DevTools from './components/DevTools'

export default function createDevTools(store) {
  if(true&& true && !window.devToolsExtension){
    setTimeout(() => render(
      <DevTools store={store} />,
      window.document.body.appendChild(document.createElement('div'))
    ), 10)
  }
}

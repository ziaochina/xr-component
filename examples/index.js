import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider, connect } from 'react-redux'
import { Map } from 'immutable'
import { AppLoader, appMiddleware, reducer } from 'xr-app-loader'
import apps from './apps'
import './assets/style/markdown.css'
import './assets/style/hljs.css'
import './assets/style/index.less'
import 'xr-component/dist/style.min.css'

const middleware = [appMiddleware(apps)]

const store = createStore(reducer, Map(), applyMiddleware(...middleware))

render(
	<Provider store ={store}>
		<AppLoader path='apps/root' />
	</Provider>,
	document.getElementById('app')
)

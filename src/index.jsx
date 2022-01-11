import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import './index.css'
import App from './App'
import index from './store'

ReactDOM.render(
    <BrowserRouter>
        <Provider store={index}>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </Provider>
    </BrowserRouter>
    ,
    document.getElementById('root')
)

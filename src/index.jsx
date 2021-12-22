import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import 'semantic-ui-css/semantic.min.css'

import './index.css'
import App from './App'
import index from './store'

ReactDOM.render(
    <Provider store={index}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
)

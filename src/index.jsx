import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'

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

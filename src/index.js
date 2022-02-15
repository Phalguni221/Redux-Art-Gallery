import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './store'
import { Provider } from 'react-redux'
import { setAPI, incrementId, decrementId, enterId, resetId } from './features/dataSlice'

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PropsDemoCheck from './components/PropsDemoCheck';
import AddDeleteExample from './components/homepage/AddDeleteExample';
import CallbackEvent from './CallbackEvent';
import LifeCycleMethods from './LifeCycleMethods';
import UseEffectDemo from './UseEffectDemo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    /* <PropsDemoCheck /> */
    /* <AddDeleteExample/> */
    
    <UseEffectDemo/>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

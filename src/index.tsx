import React from "react";
import { createRoot } from "react-dom/client";
import App from './App';
import './assets/css/reset.scss';
import './assets/css/main.css';

// eslint-disable-next-line no-undef
// console.log('env', env);
// eslint-disable-next-line no-undef
console.log('process.env.NODE_ENV', process.env.NODE_ENV);

const ele = document.getElementById("app");
if (ele) {
    const root = createRoot(ele);
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}
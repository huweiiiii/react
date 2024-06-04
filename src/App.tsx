import React from "react";
import {HashRouter as Router} from "react-router-dom";
import {ConfigProvider} from 'antd';
import zhCN from 'antd/locale/zh_CN';
import RouterView from "./router";
// import StoreProvide from './store';

const App: React.FC = () => {
    console.log('App');

    return (
        <ConfigProvider locale={zhCN}>
            <Router>
                {/* <NavLink to="/">首页</NavLink >  &emsp;||&emsp;
                    <NavLink to="/about?redirect=hello">关于</NavLink> &emsp;||&emsp;
                    <NavLink to="/about?redirect=word">关于</NavLink> &emsp;||&emsp;
                    <NavLink to="/admin">admin页面</NavLink> &emsp;||&emsp;
                    <NavLink to="/product/123">产品123</NavLink> &emsp;||&emsp;
                    <NavLink to="/product/456">产品456</NavLink> &emsp;||&emsp;
                    <NavLink to="/product/789">产品</NavLink> &emsp;||&emsp;
                    <NavLink to="/product/abc">产品</NavLink> &emsp;||&emsp; */}
                <RouterView/>
            </Router>
        </ConfigProvider>
    );
};

export default App;

import axios from "axios";
import store from "../store";
import { message } from "antd";

const service = axios.create({
    headers: {
        "Content-Type": "application/json",
    },
    baseURL: "/api",
    timeout: 5000, // 请求超时时间 5s，请求超时
});

service.interceptors.request.use((config) => {
        config.headers["token"] = store.token;
        return config;
    }, (error) => {
        return Promise.reject(error);
    }
);

// 响应拦截器

service.interceptors.response.use((response) => {
        response.data.message &&
        message.open({
            content: response.data.message,
            type: "success",
        });
        // 对响应数据做点什么
        return response;
    }, (error) => {
        switch (error.response.status) {
            case 300:
                message.open({
                    content: "多种选择",
                    type: "warning",
                });
                break;
            case 301:
                message.open({
                    content: "永久重定向",
                    type: "warning",
                });
                break;
            case 302:
                message.open({
                    content: "临时重定向",
                    type: "warning",
                });
                break;
            case 303:
                message.open({
                    content: "查看其他位置",
                    type: "warning",
                });
                break;
            case 304:
                message.open({
                    content: "未修改",
                    type: "warning",
                });
                break;
            case 305:
                message.open({
                    content: "使用代理",
                    type: "warning",
                });
                break;
            case 307:
                message.open({
                    content: "临时重定向",
                    type: "warning",
                });
                break;
            case 400:
                message.open({
                    content: "请求参数错误",
                    type: "warning",
                });
                break;
            case 401:
                message.open({
                    content: "访问没有权限",
                    type: "warning",
                });
                break;
            case 403:
                message.open({
                    content: "访问被禁止",
                    type: "warning",
                });
                break;
            case 404:
                message.open({
                    content: "请求接口未找到",
                    type: "warning",
                });
                break;
            case 405:
                message.open({
                    content: "方法禁用",
                    type: "warning",
                });
                break;
            case 406:
                message.open({
                    content: "不接受",
                    type: "warning",
                });
                break;
            case 407:
                message.open({
                    content: "需要代理授权",
                    type: "warning",
                });
                break;
            case 408:
                message.open({
                    content: "请求超时",
                    type: "warning",
                });
                break;
            case 409:
                message.open({
                    content: "服务器在完成请求时发生冲突",
                    type: "warning",
                });
                break;
            case 410:
                message.open({
                    content: "请求的资源已永久删除",
                    type: "warning",
                });
                break;
            case 411:
                message.open({
                    content: "需要有效长度",
                    type: "warning",
                });
                break;
            case 412:
                message.open({
                    content: "未满足前提条件",
                    type: "warning",
                });
                break;
            case 413:
                message.open({
                    content: "请求实体过大",
                    type: "warning",
                });
                break;
            case 414:
                message.open({
                    content: "请求的 URI 过长",
                    type: "warning",
                });
                break;
            case 415:
                message.open({
                    content: "不支持的媒体类型",
                    type: "warning",
                });
                break;

            case 416:
                message.open({
                    content: "请求范围不符合要求",
                    type: "warning",
                });
                break;
            case 417:
                message.open({
                    content: "未满足期望值",
                    type: "warning",
                });
                break;
            case 500:
                message.open({
                    content: "服务器内部错误",
                    type: "warning",
                });
                break;
            case 501:
                message.open({
                    content: "尚未实施",
                    type: "warning",
                });
                break;
            case 502:
                message.open({
                    content: "错误网关",
                    type: "warning",
                });
                break;
            case 503:
                message.open({
                    content: "服务不可用",
                    type: "warning",
                });
                break;
            case 504:
                message.open({
                    content: "网关超时",
                    type: "warning",
                });
                break;
            case 505:
                message.open({
                    content: "HTTP 版本不受支持",
                    type: "warning",

                });
                break;
        }
    }
);

// 最后暴露我们声明的 service 服务

export default service;

// import React from 'react';
import { createContext, useContext } from "react"
import todoStore from "./todos"
import userStore from "./user"


class RootStore {
    todoStore = todoStore;
    userStore = userStore;
    token = '';
    setToken = (token: string) => {
        this.token = token;
    }
}
const store = new RootStore();
export default store;
// 创建context用来保存各项数据store
const Context = createContext(store);
export const useStore = () =>  useContext(Context);
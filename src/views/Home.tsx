import React, { useRef } from "react";
import { observer } from "mobx-react-lite";
import Layout from "../layout";
import { useStore } from "../store/";

const Home: React.FC = () => {

  const { userStore } = useStore();
  const ref = useRef<HTMLInputElement>(null);
  return (
      <Layout>
          <p className="text-center text-3xl font-bold underline">
              {userStore.isLogin ? `当前登录的用户是：${userStore.name}` : "当前没有登录用户！"}
          </p>
          <p>
              <input ref={ref} type="text"/>
              <button onClick={() => {
                  console.log('点击了登录按钮', ref.current!.value);
                  userStore.login(ref.current!.value);
                  console.log('登录', userStore.name);
              }}> 登录
              </button>
              <button onClick={() => {
                  userStore.logout();
              }}> 退出
              </button>
          </p>
          <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
              <div className="shrink-0">
                  <img className="h-12 w-12" src="" alt="ChitChat Logo"/>
              </div>
              <div>
                  <div className="text-xl font-medium text-black">ChitChat</div>
                  <p className="text-slate-500">You have a new message!</p>
              </div>
          </div>
          <div
              className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 mt-4">
              <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src=""
                   alt="Woman's Face"/>
              <div className="text-center space-y-2 sm:text-left">
                  <div className="space-y-0.5">
                      <p className="text-lg text-black font-semibold">
                          Erin Lindford
                      </p>
                      <p className="text-slate-500 font-medium">
                          Product Engineer
                      </p>
                  </div>
                  <button
                      className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message
                  </button>
              </div>
          </div>
      </Layout>
  )
}

export default observer(Home);
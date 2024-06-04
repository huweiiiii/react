import React from "react";
import { useSearchParams } from "react-router-dom"

function About() {
  // 获取about查询参数redirect的值
  const [SearchParams] = useSearchParams()
  // 获取redirect的值
  const redirect = SearchParams.get('redirect')
  // 渲染
  return (
    <div>
      {/* // 传递查询参数 */}
      <h1>About页面查询参数：-{redirect}</h1>
    </div>
  );
}

// 导出组件
export default About;

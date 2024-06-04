
// 动态加载组件
import React, { lazy, Suspense } from "react";
// 动态加载组件 方法
function LazyLoad(getCom: () => Promise<{ default: React.ComponentType }>) {
  // 配置动态加载组件路径
  const Element = lazy(getCom);
  return (
    // 返回组件，Suspense:懒加载组件
    <Suspense fallback={<h3>加载中. . . </h3>}>
      {/* 内容组件 */}
      <Element />
    </Suspense>
  );
}
// 导出方法
export default LazyLoad;


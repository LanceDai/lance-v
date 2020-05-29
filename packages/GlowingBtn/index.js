// 导入组件，组件必须声明 name
import GlowingBtn from "./src";
// 为组件提供 install 安装方法，供按需引入
GlowingBtn.install = function (Vue) {
    Vue.component(GlowingBtn.name, GlowingBtn)
};
// 默认导出组件
export default GlowingBtn
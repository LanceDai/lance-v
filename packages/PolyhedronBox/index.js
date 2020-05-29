// 导入组件，组件必须声明 name
import PolyhedronBox from "./src/PolyhedronBox";
// 为组件提供 install 安装方法，供按需引入
PolyhedronBox.install = function (Vue) {
    Vue.component(PolyhedronBox.name, PolyhedronBox)
};
// 默认导出组件
export default PolyhedronBox

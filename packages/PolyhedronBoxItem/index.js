// 导入组件，组件必须声明 name
import PolyhedronBoxItem from "../PolyhedronBox/src/PolyhedronBoxItem";
// 为组件提供 install 安装方法，供按需引入
PolyhedronBoxItem.install = function (Vue) {
    Vue.component(PolyhedronBoxItem.name, PolyhedronBoxItem)
};
// 默认导出组件
export default PolyhedronBoxItem

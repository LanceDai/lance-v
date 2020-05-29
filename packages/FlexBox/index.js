// 导入组件，组件必须声明 name
import FlexBox from "./src";
// 为组件提供 install 安装方法，供按需引入
FlexBox.install = function (Vue) {
    Vue.component(FlexBox.name, FlexBox)
};
// 默认导出组件
export default FlexBox

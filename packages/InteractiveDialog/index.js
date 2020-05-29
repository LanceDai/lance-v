// 导入组件，组件必须声明 name
import InteractiveDialog from "./src";
// 为组件提供 install 安装方法，供按需引入
InteractiveDialog.install = function (Vue) {
    Vue.component(InteractiveDialog.name, InteractiveDialog)
};
// 默认导出组件
export default InteractiveDialog
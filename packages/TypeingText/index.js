// 导入组件，组件必须声明 name
import TypingText from "./TypingText";
// 为组件提供 install 安装方法，供按需引入
TypingText.install = function (Vue) {
    Vue.component(TypingText.name, TypingText)
};
// 默认导出组件
export default TypingText
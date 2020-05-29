// 导入组件，组件必须声明 name
import WavyFont from "./WavyFont";
// 为组件提供 install 安装方法，供按需引入
WavyFont.install = function (Vue) {
    Vue.component(WavyFont.name, WavyFont)
};
// 默认导出组件
export default WavyFont

// vue.config.js
module.exports = {
    devServer: {
        port: 10000,
        open: false,
        disableHostCheck: true,
        hotOnly: true
    },
    pages: {
        index: {
            // entry for the pages 入口文件
            entry: 'examples/main.js',
            // the source template html模板文件
            template: 'public/index.html',
            filename: 'index.html',
            title: '首页'
        }
    }
}

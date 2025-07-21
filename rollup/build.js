const path = require('path')                        //node.js内置模块，用于处理文件和目录路径
const json = require('@rollup/plugin-json')         //Rollup插件，用于将JSON文件转化为ES6模块
const {babel} = require('@rollup/plugin-babel')     //Rollup插件，用于通过Bable转换JavaScript代码


// 接受一个文件路径作为参数，并返回该路径与当前文件所在目录的绝对地址
const resolveFile = function(filePath){
    return path.join(__dirname,filePath)
}
// 包含用于Rollup打包过程的插件
const plugins  = [
    json({
        compact:true        //生成的JSON模块将没有空格和换行符，即压缩格式
    }),
    babel({
        extensions:['.js','.ts'],
        babelHelpers:'bundled',
        presets:[[
            "@babel/env",
            {
                targets:{
                    browsers:[
                        '>1%',
                        'last 2 versions'
                    ]
                }
            }
        ]]
    })
]

module.exports = [
    {
        plugins,
        input:resolveFile('../src/webEyeSDK.js'),
        output:{
            file:resolveFile('../dist/monitor.js'),
            format:'iife',      //全局变量方式，适合在script标签中直接使用
            name:'monitor',
            sourcemap:true
        }
    },{
        plugins,
        input:resolveFile('../src/webEyeSDK.js'),
        output:{
            file:resolveFile('../dist/monitor.esm.js'),
            format:'esm',   //现在JavaScript模块系统，适用于支持ES6模块的环境中
            name:'monitor',
            sourcemap:true
        }
    },
    {
        plugins,
        input:resolveFile('../src/webEyeSDK.js'),
        output:{
            file:resolveFile('../dist/monitor.cjs.js'),
            format:'cjs',       //这是node.js使用的模块系统，也是许多就工具和库的标准   common.js
            name:'monitor',
            sourcemap:true
        }
    }
]
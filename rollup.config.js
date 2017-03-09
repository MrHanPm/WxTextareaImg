import progress from 'rollup-plugin-progress'
import postcss from 'rollup-plugin-postcss'
import cssnext from 'postcss-cssnext'
import buble from 'rollup-plugin-buble'
import html from 'rollup-plugin-html'
import autoprefixer from 'autoprefixer'
import clean from 'postcss-clean'
import atImport from 'postcss-import'
import nodeResolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'
import commonJs from 'rollup-plugin-commonjs'
import license from 'rollup-plugin-license'
var pkg = require('./package.json')


export default {
    entry: 'src/index.js',
    dest: 'dist/wx-textarea-img.js',
    format: 'umd',
    moduleName: "WxTextareaImg",
    plugins: [
        license({
            banner: `wx-textarea-img ${pkg.version}`
        }),
        progress({
            clearLine: false
        }),
        replace({
            VERSION: JSON.stringify(pkg.version)
        }),
        postcss({
            plugins: [
                atImport(),
                cssnext({
                    warnForDuplicates: false
                }),
                autoprefixer(),
                clean()
            ],
            extensions: ['.css', '.pcss']
        }),
        html({
            include: '**/*.html',
            htmlMinifierOptions: {
                collapseWhitespace: true,
                collapseBooleanAttributes: true,
                conservativeCollapse: true
            }
        }),
        commonJs({
            include: 'node_modules/lrz/**'
        }),
        nodeResolve({jsnext: true}),
        buble({
            include: '**/*.js'
        })
    ]
}

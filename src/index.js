import editor from './editor'
import mixin from './util/mixin'

class WxTextareaImg {
    constructor(options = {}) {
        const modules = []
        const components = {}
        const defaultShowModuleName = !!options.showModuleName

        const compo = mixin(editor, {
            data() {
                return {modules, defaultShowModuleName}
            },
            components
        })
        mixin(this, compo)
    }
    static install(Vue, options = {}) {
        Vue.component(options.name || 'wx-textarea-img', new WxTextareaImg(options))
    }
}
export default WxTextareaImg

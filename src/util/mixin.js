
export default function mixin(source = {}, ext = {}) {
    Object.keys(ext).forEach((k) => {
        // for data function
        if (k === 'data') {
            const dataSrc = source[k]
            const dataDesc = ext[k]
            if (typeof dataDesc === 'function') {
                if (typeof dataSrc !== 'function') {
                    source[k] = dataDesc
                } else {
                    source[k] = () => mixin(dataSrc(), dataDesc())
                }
            }
        } else {
            source[k] = ext[k]
        }
    })
    return source
}

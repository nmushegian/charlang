const lang = {
    ['-']: ' const ',
    ['+']: ' let ',
    ['#']: ' arguments ',
    ['&']: ' this ',
    ['^']: ' return ',
    ['@']: ' async ',
    ['~']: ' await ',
    ['>']: ' => ',
    ['<']: ' ()=> ',
    ['%']: ' function ',
    ['|']: ' function ()',
}

module.exports.compile = (code) => {
    try {
        let out = code;
        for ([k,v] of Object.entries(lang)) {
            out = out.replaceAll(k, v)
        }
        const f = Function(out)
        return f
    } catch (e) {
        console.log(code)
        throw e
    }
}

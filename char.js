
const code = String.raw`
%show(x,y) {
  -s = ''
  ^s
}
-it = @%(s,f) { ~f() }
-send = < console.log('')
it('is a test', @|{
  -x = ~send()
  show(x, (|{})())
})

`

const lang = {
    ['#']: ' arguments ',
    ['+']: ' let ',
    ['-']: ' const ',
    ['&']: ' this ',
    ['^']: ' return ',
    ['@']: ' async ',
    ['~']: ' await ',
    ['/']: ' ()=> ',
    ['>']: ' => ',
    ['<']: ' ()=> ',
    ['%']: ' function ',
    ['|']: ' function ()',
}


out = code
for ([k,v] of Object.entries(lang)) {
    out = out.replaceAll(k, v)
}
const f = Function(out)
console.log(f.toString())
f()

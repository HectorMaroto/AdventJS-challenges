function decode(message) {
    const match = message.match(/\(([^()]+)\)/g)
  
    if(!match) return message;
  
    const sanitized = match[0].slice(1, -1).split('').reverse().join('');
    const result = message.replaceAll(match[0], sanitized) 
    return decode(result)
}
  
const a = decode('hola (odnum)')
console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus

// Paso a paso:
// 1. Invertimos el anidado -> sa(ualcatn)s
// 2. Invertimos el que queda -> santaclaus
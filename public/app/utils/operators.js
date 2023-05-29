export const partialize = (fn, ...args) =>
     fn.bind(null, args);

export const compose = (...functions) => value => 
    functions.reduceRight((previousValue, fn) => fn(previousValue), value)

export const pipe = (...functions) => value => 
    functions.reduce((previousValue, fn) => fn(previousValue), value)
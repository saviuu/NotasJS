export const partialize = (fn, ...args) =>
     fn.bind(null, args);

export const compose = (...functions) => value => 
    functions.reduceRight((previousValue, fn) => fn(previousValue), value)

export const pipe = (...functions) => value => 
    functions.reduce((previousValue, fn) => fn(previousValue), value)

export const takeUntil = (times, fn) => 
     () => times-- > 0 && fn();
    
export const debounceTime = (milliseconds, fn) => {
    let timer = 0;
    return () => {
        clearTimeout(timer);
        timer = setTimeout(fn, milliseconds);
    }
}

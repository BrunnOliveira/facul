const timer = setInterval(function(){
    console.log('caralhos');
}, 2000);

setTimeout(function(){
    clearInterval(timer);
}, 10000)

console.log(timer);
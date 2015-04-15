function heavyCompute(n, callback) {
    var count = 0,
        i, j;

    for (i = n; i > 0; --i) {
        for (j = n; j > 0; --j) {
            count += 1;
        }
    }

    callback(count);
}

setTimeout(function (){heavyCompute(10000, function (count) {
    console.log(count);
})},1000);

console.log('hello');

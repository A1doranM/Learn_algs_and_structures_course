function cashFunction(fn) {
    const cash = {};
    return function (n) {
        if (cash[n]) {
            console.log('Взято из кеша', cash[n]);
            return cash[n]
        }
        let result = fn(n);
        console.log('Посчитала функция = ', result);
        cash[n] = result;
        return result;
    };
}

function factorial(n) {
    let result = 1;
    while (n !== 1) {
        result *= n;
        n -= 1;
    }
    return result
}

const cashFactorial = cashFunction(factorial);

cashFactorial(5);
cashFactorial(4);
cashFactorial(3);
cashFactorial(4);
cashFactorial(5);
cashFactorial(1);

////////////////////////////////////////////
///////////////////////////////////////////
function cashResult(fn){
    const cash = {};
    const cashArr=  [];

    return function(n){
        if(cash[n]){
            return cash[n];
        }

        let result = fn(n);
        cash[n] = result;
        return result;
    };
}

let cashArr = [];

function getFib(n) {
    let a, b;
    if(n <= 1){
        return 1;
    }

    if(cashArr[n - 1]){
        b = cashArr[n-1];
        a = cashArr[n-2];
        return a + b;
    }

    cashArr[n] = getFib(n - 1) + (cashArr[n - 2] || getFib(n - 2));
    return cashArr[n];
}

/////////////////////////////////////////////////
function arrInter(arr1, arr2) {
    let obj = {};

    for (let i = 0; i < arr1.length; i++) {
        if (obj[arr1[i]]) {
            obj[arr1[i]]++;
            continue;
        }

        obj[arr1[i]] = 1;

    }

    let result = [];

    for (let i = 0; i < arr2.length; i++) {
        if (obj[arr2[i]]) {
            obj[arr2[i]]--;
            result.push(arr2[i]);
        }

    }

    return result;

}

const fibonacci = (num) => {
    let computation = [];
    computation[0] = 0;
    computation[1] = 1;
    for (let i = 2; i < num; i++) {
        computation[i] = computation[i - 1] + computation[i - 2];
    }
    return computation;
}

console.log(fibonacci(8));
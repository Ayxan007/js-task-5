// let userNumbers = prompt();
// userNumbers = parseInt(userNumbers);

// for (let i = 1; i <= 1000; i++) {
//     if ( i % userNumbers === 0) {
//         console.log(i)
//     }
// }

function fibonacci(n) {
    if (n <= 0) {
        return "müsbət bir ədəd daxil edin.";
    } else if (n === 1) {
        return 1;
    } else if (n === 2) {
        return 1;
    }

    let a = 1; 
    let b = 1;
    let c;

    for (let i = 3; i <= n; i++) {
        c = a + b;
        a = b;
        b = c; 
    }

    return b;
}

let N = parseInt(prompt("Musbet bir ədəd daxil edin:"), 10);
console.log(fibonacci(N));

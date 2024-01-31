import { formateCurrency } from '../scripts/utils/money.js';
// basic test cases
if (formateCurrency(2095) === '20.95') {
    console.log('passed');
}else {
    console.log('failed');
}

// both cases are edge test cases
if(formateCurrency(0)=== '0.00'){
    console.log('passed');
}else {
    console.log('failed');
}

if(formateCurrency(2000.5) === '20.01'){
    console.log('passed');
} else {
    console.log('failed');
}


// exercise
if(formateCurrency(2000.4) === '20.00'){
    console.log('passed');
} else {
    console.log('failed');
}

// console.log(formateCurrency(2000.5));
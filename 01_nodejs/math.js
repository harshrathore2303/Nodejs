// add and sub are functions in math.js
function getSum(num1, num2) {
    return num1 + num2;
}

function getSub(num1, num2) {
    return num1 - num2;
}

// export the functions to be used in other files
module.exports = {
    add: getSum, 
    sub: getSub
};

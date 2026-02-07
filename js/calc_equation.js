const PI = Math.PI;
const sin = Math.sin;
const cos = Math.cos;

function factorial(n) {
  if (n < 0) return NaN;
  if (n === 0) return 1;
  let res = 1;
  for (let i = 1; i <= n; i++) res *= i;
  return res;
}

function parseFactorialDigits(equation, i) {
  let count = 0;
  for (let j = i - 1; j >= 0; j--) {
    if (equation[j].match(/[0-9]/)) count++;
    else {
      equation = equation.substring(0, j + 1) + 'factorial(' + equation.substring(j + 1, i) + ')' + equation.substring(i + 1);
      return equation;
    }
  }
  equation = 'factorial(' + equation.substring(0, i) + ')' + equation.substring(i + 1);
  return equation;
}

function parseFactorialParentheses(equation, i) {
  let count = 0;
  for (let j = i - 1; j >= 0; j--) {
    if (equation[j] === ')') count++;
    else if (equation[j] === '(') count--;
    if (count === 0 && equation[j] === '(') {
      equation = equation.substring(0, j) + 'factorial(' + equation.substring(j + 1, i) + equation.substring(i + 1);
      break;
    }
  }
  return equation;
}

function parseEquation(equation) {
  for (let i = 0; i < equation.length; i++) {
    if (equation[i] === '!') {
      if (equation[i - 1].match(/[0-9]/))
        equation = parseFactorialDigits(equation, i);
      else
        equation = parseFactorialParentheses(equation, i);
    }
  }
  return equation.replace(/π/g, 'PI')
    .replace(/pi/g, 'PI')
    .replace(/([\d])PI/ig, '$1*PI')
    .replace(/\)\(/g, ')*(')
    .replace(/\^/g, '**');
}

function calculateEquation(equation) {
  const parsed = parseEquation(equation);
  return eval(`Math.trunc(${parsed})`);
}

// equation = "~(-((2+0!)!)!/(2*6))";
// parsed = parseEquation(equation);
// console.log(`${parsed} = ${eval(`Math.trunc(${parsed})`)}`)
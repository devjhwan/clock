const equationInput = document.getElementById('equationInput');
const codeOutput = document.getElementById('codeOutput');
const resultOutput = document.getElementById('resultOutput');
const errorOutput = document.getElementById('errorOutput');

equationInput.addEventListener('input', (e) => {
  const equation = e.target.value.trim();
  
  errorOutput.classList.remove('active');
  errorOutput.textContent = '';
  
  if (!equation) {
    codeOutput.textContent = '-';
    resultOutput.textContent = '-';
    return;
  }
  
  try {
    // Parse the equation
    const parsedEquation = parseEquation(equation);
	console.log(parsedEquation);
    codeOutput.textContent = parsedEquation;
    
    // Calculate the result
    const result = calculateEquation(equation);
	console.log(parsedEquation);
    resultOutput.textContent = result;
  } catch (error) {
    resultOutput.textContent = '-';
    errorOutput.textContent = 'Error in equation.';
    errorOutput.classList.add('active');
  }
});

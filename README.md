# 2026 Clock

A web-based analog clock application with an integrated equation converter, built with HTML, CSS, and JavaScript.

## Features

- Displays current UTC time with hour, minute, and second hands
- Interactive clock ticks for hour and minute markers
- Equation labels on clock face that can be clicked to input into the converter
- Equation Converter form that:
  - Parses mathematical equations with support for factorial (!), powers (^), pi, and trigonometric functions
  - Displays the converted code
  - Calculates and shows the result
  - Displays error messages for invalid equations
- Responsive design with dark theme

## Project Structure

- `index.html`: Main HTML file for the clock and form interface
- `clock.css`: Stylesheet for clock and form appearance
- `js/clock_hand_update.js`: JavaScript for updating clock hands
- `js/clock_tick_placement.js`: JavaScript for placing clock ticks and handling label interactions
- `js/eq_generator.js`: JavaScript for generating mathematical equations
- `js/calc_equation.js`: JavaScript for parsing and calculating equations
- `js/form_handler.js`: JavaScript for handling form input and output

## Supported Equation Syntax

- Basic operations: `+`, `-`, `*`, `/`
- Power: `^` (converted to `**`)
- Factorial: `!`
- Pi: `pi` or `π` (when preceded by a number, e.g., `2pi`)
- Trigonometric: `sin()`, `cos()`
- Bitwise NOT: `~`
- Bitwise left shift: `<<`
- Parentheses: `()`

## How to Run

https://devjhwan.github.io/clock/

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)

## License

This project is open source. Feel free to use and modify as needed.

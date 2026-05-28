// 1. Function declaration
function calcAreaDeclaration(width, height) {
  return width * height;
}
console.log('Declaration:', calcAreaDeclaration(5, 10));

// 2. Function expression
const calcAreaExpression = function(width, height) {
  return width * height;
};
console.log('Expression:', calcAreaExpression(5, 10));

// 3. Arrow function
const calcAreaArrow = (width, height) => width * height;
console.log('Arrow:', calcAreaArrow(5, 10));

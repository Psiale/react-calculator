import Big from 'big.js';

const operate = (numOne, numTwo, operation) => {
  let bigNumOne = 0;
  let bigNumTwo = 0;
  let result;

  if (numOne !== '' && numTwo !== '') {
    bigNumOne = Big(Number(numOne));
    bigNumTwo = Big(Number(numTwo));
  } else {
    return;
  }
  switch (operation) {
    case '+':
      result = bigNumOne.plus(bigNumTwo);
      break;
    case '-':
      result = bigNumOne.minus(bigNumTwo);
      break;
    case 'x':
      result = bigNumOne.pow(bigNumTwo);

      break;
    case '÷':
      bigNumTwo.eq(0) ? (result = 0) : (result = bigNumOne.div(bigNumTwo));
      break;
    case '%':
      bigNumTwo === null
        ? (result = bigNumOne.div(100))
        : (result = bigNumOne.times(bigNumTwo).div(100));
      break;

    default:
      break;
  }
  return result.toString();
};

export default operate;

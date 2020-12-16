import operate from './operate';

const calculate = (calculator, btnName) => {
  let { total, next, operation } = calculator;
  switch (btnName) {
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      (!total || total === '0') ? total = btnName : total += btnName;
      break;
    case '+':
    case '-':
    case '%':
    case 'X':
    case '÷':
      operation = btnName;
      if (total) {
        next = total;
        total = null;
      }
      break;
    case '+/-':
      if (next) next = (next * -1).toString();
      if (total) total = (total * -1).toString();
      break;
    case '.':
      (total && !total.includes('.')) ? total += '.' : total = '0.';
      break;
    case '=':
      total = operate(total, next, operation);
      next = operation = null;
      break;
    case 'AC':
      total = next = operation = null;
      break;
    default:
      break;
  }
  return { total, next, operation };
};

export default calculate;

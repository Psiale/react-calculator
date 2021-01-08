import operate from '../../../logic/operate';

describe('operation works properly depending on the symbol passed as parameter', () => {
  it('sums num 1 with num 2 and returns the result', () => {
    expect(operate(10, 20, '+')).toEqual('30');
  });

  it('substracts num 2 to num 1 and returns the result', () => {
    expect(operate(10, 20, '-')).toEqual('-10');
  });

  it('pows num 1 to num 2 and returns the result', () => {
    expect(operate(10, 20, 'X')).toEqual('200');
  });

  it('divides num 1 to num 2 and returns the result', () => {
    expect(operate(20, 200, '÷')).toEqual('10');
  });

  it('returns 0 if num one eq 0', () => {
    expect(operate(0, 200, '÷')).toEqual('0');
  });

  it('divides num 1 by 100 if num 2 is null', () => {
    expect(operate(20, null, '÷')).toEqual('0');
  });

  it('divides num times the num 2 divided by 100 if num ', () => {
    expect(operate(2, 100, '÷')).toEqual('50');
  });
});

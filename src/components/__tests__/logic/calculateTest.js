import calculate from '../../../logic/calculate';

describe('if users press A/C key', () => {
  it('asigns all values to null', () => {
    expect(
      calculate({ total: 10, next: 20, operation: '-' }, 'AC'),
    ).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });
});

describe('if users press = key', () => {
  it('returns a total value with the result of the operation', () => {
    expect(
      calculate({ total: 10, next: 20, operation: '+' }, '='),
    ).toEqual({
      total: '-10',
      next: '-20',
      operation: '+',
    });
  });
});

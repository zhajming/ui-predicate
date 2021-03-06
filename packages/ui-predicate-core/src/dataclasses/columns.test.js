// why? because I HATE ES6 import/export
const { Type, Operator } = require('./columns');

describe('Type', () => {
  it('allow for more operators', () => {
    expect(
      Type({
        type_id: 'int',
        operator_ids: ['isLowerThan', 'isEqualTo', 'isHigherThan'],
        myAwesomeAttribute: true,
      }).myAwesomeAttribute
    ).toBe(true);
  });
});

describe('Operator', () => {
  it('throws if a property is missing', () => {
    expect(() =>
      Operator({
        // do not specify anything
      })
    ).toThrow(/MUST have a 'argumentType_id' property/);
  });
});

const sum = require ('../index');
var expect = require('chai').expect;

it('calc sum', () => {
    expect(sum(1, 8)).to.eq(9);
})

it('calc sum', () => {
    expect(sum(-1, -8)).to.equal(-9);
})
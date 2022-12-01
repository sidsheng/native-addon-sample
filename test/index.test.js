const assert = require('assert');
const greet = require('..'); // loads ../index.js

describe('Test greet API', () => {
    it('should return `Hello Sid!`', () => {
        const result = greet.hello('Sid'); // returns 'Hello Mike!'
        assert.equal('Hello Sid!', result);
    });
});

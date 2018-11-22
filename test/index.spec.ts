import { CreatePi3, Pi3Defaults } from '../dist/index';
const chai = require('chai')
  , expect = chai.expect;
chai.use(require('sinon-chai'));
chai.use(require('chai-match'));
require('mocha-sinon');

describe('Package Helper CreatePi3 creates a default model', function() {
    const piModel3 = CreatePi3(Pi3Defaults);

    it('should have a timestamp', function() {
        expect(piModel3.timestamp).to.not.equal(undefined);
    });
});
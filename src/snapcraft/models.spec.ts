import { ISnapModel, Pi3Model } from './models';
import { AssertionError } from 'assert';
const sinon = require('sinon');
const chai = require('chai')
  , expect = chai.expect;
chai.use(require('sinon-chai'));
chai.use(require('chai-match'));
require('mocha-sinon');

describe('Pi3Model implements ISnapModel with parameters', () => {
    let piModel3 = new Pi3Model('test-authority-id', 'test-brand-id', '18', 'test-model');
    

    beforeEach(function() {
        piModel3.timestamp = new Date().toISOString();
    });
    it('should have default type', function() {
        chai.assert(piModel3.type == 'model', 'type is model');
    });
    it('should have default architecture', function() {
        chai.assert(piModel3.architecture == 'armhf', 'architecture is armhf');
    });
    it('should have default gadget', function() {
        chai.assert(piModel3.gadget == 'pi3', 'gadget is pi3');
    });
    it('should have default kernel', function() {
        chai.assert(piModel3.kernel == 'pi2-kernel', 'kernel is pi2-kernel');
    });
    it('should have passed values (test-authority-id)', function() {
        const authorityId = 'test-authority-id';
        expect(piModel3.authorityId).to.equal(authorityId);
    });
    it('should have passed values (test-brand-id)', function() {
        const brandId = 'test-brand-id';
        expect(piModel3.brandId).to.equal(brandId);
    });
    it('should have passed values (test-model)', function() {
        const model = 'test-model';
        expect(piModel3.model).to.equal(model);
    });
    it('should have passed values (series - 18 and 16)', function() {
        let series = '18';
        expect(piModel3.series).to.equal(series);
        series = '16';
        const piModel3b = new Pi3Model('test-authority-id', 'test-brand-id', series, 'test-model');
        expect(piModel3b.series).to.equal(series);
    });
    it('should output valid JSON', function() {
        const jsonObject = piModel3.toJSON();
        console.log(jsonObject);
        chai.assert(jsonObject.hasOwnProperty('type'));
    });

});
describe('Pi3Model implements ISnapModel with an object', () => {
    const snapModel: ISnapModel = {
        type: 'model',
        authorityId: 'test-authority-id',
        brandId: 'test-brand-id',
        series: '16',
        model: 'test-model',
        architecture: 'ignored',
        gadget: 'ignored',
        kernel: 'ignored',
        timestamp: new Date().toISOString(),
    }
    const piModel3 = new Pi3Model(snapModel);

    beforeEach(function() {
    });
    it('can be instantiated with an in-line object', function() {
        chai.assert(piModel3.model == 'test-model', 'model is test-model');
    });
    it('ignores architecture', function() {
        expect(piModel3.architecture).to.equal('armhf');
    });
    it('ignores gadget', function() {
        expect(piModel3.gadget).to.equal('pi3');
    });
    it('ignores kernel', function() {
        expect(piModel3.kernel).to.equal('pi2-kernel');
    });
    it('ignores type', function() {
        expect(piModel3.type).to.equal('model');
    });
});

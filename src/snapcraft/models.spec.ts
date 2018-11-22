import { ISnapModel, Pi3Model } from './models';
const sinon = require('sinon');

const chai = require('chai')
  , expect = chai.expect;
chai.use(require('sinon-chai'));
chai.use(require('chai-match'));
require('mocha-sinon');

describe('Pi3Model implements ISnapModel', () => {
    beforeEach(function() {
        // const timeStamp = new Date().toISOString();
    });
    it('should have default type', function() {
        const piModel3 = new Pi3Model('test-authority-id', 'test-brand-id', '18', 'test-model');
        chai.assert(piModel3.type == 'model', 'type is model');
    });
    it('should have default architecture', function() {
        const piModel3 = new Pi3Model('test-authority-id', 'test-brand-id', '18', 'test-model');
        chai.assert(piModel3.architecture == 'armhf', 'architecture is armhf');
    });
    it('should have default gadget', function() {
        const piModel3 = new Pi3Model('test-authority-id', 'test-brand-id', '18', 'test-model');
        chai.assert(piModel3.gadget == 'pi3', 'gadget is pi3');
    });
    it('should have default kernel', function() {
        const piModel3 = new Pi3Model('test-authority-id', 'test-brand-id', '18', 'test-model');
        chai.assert(piModel3.kernel == 'pi2-kernel', 'kernel is pi2-kernel');
    });
    it('should have passed values (test-authority-id)', function() {
        const authorityId = 'test-authority-id';
        const piModel3 = new Pi3Model(authorityId, 'test-brand-id', '18', 'test-model');
        chai.assert(piModel3.authorityId == authorityId, `authorityId is ${authorityId}`);
    });
    it('should have passed values (test-brand-id)', function() {
        const brandId = 'test-brandId-id';
        const piModel3 = new Pi3Model('test-authority-id', brandId, '18', 'test-model');
        chai.assert(piModel3.brandId == brandId, `brandId is ${brandId}`);
    });
    it('should have passed values (series - 18 and 16)', function() {
        let series = '18';
        const piModel3a = new Pi3Model('test-authority-id', 'test-brand-id', series, 'test-model');
        chai.assert(piModel3a.series == series, `series is ${series}`);
        series = '16';
        const piModel3b = new Pi3Model('test-authority-id', 'test-brand-id', series, 'test-model');
        chai.assert(piModel3b.series == series, `series is ${series}`);
    });
    it('should have passed values (test-brand-id)', function() {
        const brandId = 'test-brandId-id';
        const piModel3 = new Pi3Model('test-authority-id', brandId, '18', 'test-model');
        chai.assert(piModel3.brandId == brandId, `brandId is ${brandId}`);
    });
    it('should have passed values (test-model)', function() {
        const model = 'test-model';
        const piModel3 = new Pi3Model('test-authority-id', 'test-brand-id', '18', model);
        chai.assert(piModel3.model == model, `model is ${model}`);
    });

    // it('should log "warning" to console.log', function() {
    //   const spy = sinon.spy();
    //   const transport = new SpyTransport({ spy });
    //   lambdaLogger.remove(winston.transports.Console);
    //   lambdaLogger.add(transport);
    //   lambdaLogger.warn('warning %j', { test: 'testing' });
    //   expect( spy.calledOnce ).to.be.true;
    //   expect( spy.lastCall.args[0].level ).to.match(new RegExp('^.*warn.*$'));
    //   expect( spy.lastCall.args[0].message ).to.match(new RegExp('^.*warning.*$'));
    //   expect( spy.lastCall.args[0].message ).to.match(new RegExp('^.*testing.*$'));
    // });
    // it('should log "error" to console.log', function() {
    //   const spy = sinon.spy();
    //   const transport = new SpyTransport({ spy });
    //   lambdaLogger.remove(winston.transports.Console);
    //   lambdaLogger.add(transport);
    //   lambdaLogger.error('error');
    //   expect( spy.calledOnce ).to.be.true;
    //   expect( spy.lastCall.args[0].level ).to.match(new RegExp('^.*error.*$'));
    //   expect( spy.lastCall.args[0].message ).to.match(new RegExp('^.*error.*$'));
    // });
  });
  
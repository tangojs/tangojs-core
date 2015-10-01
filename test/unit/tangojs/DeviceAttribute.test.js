import chai from 'chai'
import sinon from 'sinon'
import chaiAsPromised from 'chai-as-promised'
import sinonChai from 'sinon-chai'
import * as tangojs from '../../../src/tangojs'

chai.use(chaiAsPromised)
chai.use(sinonChai)
chai.should()

/**
 * @test {DeviceAttribute}
 */
describe('DeviceAttribute', () => {

  let attributeName = 'test'

  let deviceProxy

  let deviceAttribute

  beforeEach(() => {
    deviceProxy = {}
    deviceAttribute = new tangojs.DeviceAttribute(deviceProxy, attributeName)
  })

  describe('constructor', () => {

    it('Should create new DeviceAttribute instance', () => {
      deviceAttribute.deviceProxy.should.equal(deviceProxy)
      deviceAttribute.attributeName.should.equal(attributeName)
    })

  })

  describe('readValue', () => {

    it('Should read value from the device', () => {
      let value = {}
      deviceProxy.readAttributeValue = sinon.stub()
        .returns(Promise.resolve(value))
      return Promise.all([
        deviceAttribute.readValue().should.eventually.eql(value),
        deviceProxy.readAttributeValue
          .should.have.been.calledWith(attributeName)
      ])
    })

  })

  describe('writeValue', () => {

    it('Should write value to the device (async)', () => {
      let value = {}
      deviceProxy.writeAttributeValue =
        sinon.stub().returns(Promise.resolve(undefined))
      return Promise.all([
        deviceAttribute.writeValue(value).should.eventually.be.undefined,
        deviceProxy.writeAttributeValue
          .should.have.been.calledWith(attributeName, value, false)
      ])
    })

    it('Should write value to the device', () => {
      let inValue = {}
      let outValue = {}
      deviceProxy.writeAttributeValue =
        sinon.stub().returns(Promise.resolve(outValue))
      return Promise.all([
        deviceAttribute.writeValue(inValue, true)
          .should.eventually.be.equal(outValue),
        deviceProxy.writeAttributeValue
          .should.have.been.calledWith(attributeName, inValue, true)
      ])
    })

  })

  describe('readInfo', () => {

    it('Should read attribute info from the device', () => {
      let info = new tangojs.AttributeInfo()
      deviceProxy.readAttributeInfo =
        sinon.stub().returns(Promise.resolve(info))
      return Promise.all([
        deviceAttribute.readInfo().should.eventually.be.equal(info),
        deviceProxy.readAttributeInfo
          .should.have.been.calledWith(attributeName)
      ])
    })
  })
})

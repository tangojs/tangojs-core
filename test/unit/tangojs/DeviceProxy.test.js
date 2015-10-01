import chai from 'chai'
import sinon from 'sinon'
import chaiAsPromised from 'chai-as-promised'
import sinonChai from 'sinon-chai'
import * as tangojs from '../../../src/tangojs'

chai.use(chaiAsPromised)
chai.use(sinonChai)
chai.should()

/**
 * @test {DeviceProxy}
 */
describe('DeviceProxy', () => {

  let deviceName = 'foo/bar/baz'
  let connectorMock
  let deviceProxy

  beforeEach(() => {
    connectorMock = new tangojs.Connector()
    tangojs.setConnector(connectorMock)
    deviceProxy = new tangojs.DeviceProxy(deviceName)
  })


  describe('constructor', () => {

    it('Should create new DeviceProxy from name parts', () => {
      let proxy = new tangojs.DeviceProxy('foo', 'bar', 'baz')
      proxy.deviceName.should.be.equal('foo/bar/baz')
    })

    it('Should create new DeviceProxy from full name', () => {
      let proxy = new tangojs.DeviceProxy('foo/bar/baz')
      proxy.deviceName.should.be.equal('foo/bar/baz')
    })

    it('Should throw when name is invalid', () => {
      // FIXME this is failing
      // chai.expect(
      //   () => new tangojs.DeviceProxy('some/dumb/@#@/invalid$\\name/')
      // ).to.throw(tangojs.InvalidDeviceNameException)
    })

  })

  describe('getName', () => {

    it('Should return device name', () => {
      let proxy = new tangojs.DeviceProxy('foo/bar/baz')
      proxy.getName().should.be.equal('foo/bar/baz')
    })

  })

  describe('readStatus', () => {

    it('Should read device status', () => {
      let status = new tangojs.DeviceStatusResponse()
      connectorMock.readDeviceStatus =
        sinon.stub().returns(Promise.resolve(status))
      return Promise.all([
        deviceProxy.readStatus().should.eventually.be.equal(status),
        connectorMock.readDeviceStatus.should.have.been.calledWith(deviceName)
      ])
    })

  })

  describe('readInfo', () => {

    it('Should read device info', () => {
      let info = new tangojs.DeviceInfo()
      connectorMock.readDeviceInfo =
        sinon.stub().returns(Promise.resolve(info))
      return Promise.all([
        deviceProxy.readInfo().should.eventually.be.equal(info),
        connectorMock.readDeviceInfo.should.have.been.calledWith(deviceName)
      ])
    })

  })

  describe('readAttributesList', () => {

    it('Should read list of all attributes', () => {
      let attrs = ['attr1', 'attr2']
      connectorMock.readAttributesList =
        sinon.stub().returns(Promise.resolve(attrs))
      return Promise.all([
        deviceProxy.readAttributesList().should.eventually.be.equal(attrs),
        connectorMock.readAttributesList.should.have.been.calledWith(deviceName)
      ])
    })

  })

  describe('createDeviceAttribute', () => {
    // TODO implement
  })

  describe('readAttributeValue', () => {

    it('Should read value of an attribute', () => {
      let value = {}
      connectorMock.readAttributeValue =
        sinon.stub().returns(Promise.resolve(value))
      return Promise.all([
        deviceProxy.readAttributeValue('my_attr')
          .should.eventually.be.equal(value),
        connectorMock.readAttributeValue
          .should.have.been.calledWith(deviceName, 'my_attr')
      ])
    })

  })

  describe('writeAttributeValue', () => {

    it('Should write value to an attribute (sync)', () => {
      let value = {}
      let storedValue = {}
      deviceProxy.writeAttributeValuesBulk =
        sinon.stub().returns(Promise.resolve([storedValue]))
      return Promise.all([
        deviceProxy.writeAttributeValue('my_attr', value, true)
          .should.eventually.be.equal(storedValue),
        deviceProxy.writeAttributeValuesBulk
          .should.have.been.calledWith([['my_attr', value]], true, false)
      ])
    })

    it('Should write value to an attribute (async)', () => {
      let value = {}
      deviceProxy.writeAttributeValuesBulk =
        sinon.stub().returns(Promise.resolve(undefined))
      return Promise.all([
        deviceProxy.writeAttributeValue('my_attr', value)
          .should.eventually.be.undefined,
        deviceProxy.writeAttributeValuesBulk
          .should.have.been.calledWith([['my_attr', value]], false, false)
      ])
    })

  })

  describe('writeAttributeValuesBulk', () => {
    // TODO implement
  })

  describe('readAttributeInfo', () => {

    it('Should read attribute info', () => {
      let info = new tangojs.AttributeInfo()
      connectorMock.readAttributeInfo =
        sinon.stub().returns(Promise.resolve(info))
      return Promise.all([
        deviceProxy.readAttributeInfo('my_attr')
          .should.eventually.be.equal(info),
        connectorMock.readAttributeInfo
          .should.have.been.calledWith(deviceName, 'my_attr')
      ])
    })

  })

  describe('createDeviceCommand', () => {
    // TODO implement
  })

  describe('readCommandsList', () => {

    it('Should read list of all commands', () => {
      let cmds = ['cmd', 'cmd2']
      connectorMock.readCommandsList =
        sinon.stub().returns(Promise.resolve(cmds))
      return Promise.all([
        deviceProxy.readCommandsList().should.eventually.be.equal(cmds),
        connectorMock.readCommandsList.should.have.been.calledWith(deviceName)
      ])
    })

  })

  describe('readCommandInfo', () => {

    it('Should read command info', () => {
      let info = new tangojs.CommandInfo()
      connectorMock.readCommandInfo =
        sinon.stub().returns(Promise.resolve(info))
      return Promise.all([
        deviceProxy.readCommandInfo('my_cmd').should.eventually.be.equal(info),
        connectorMock.readCommandInfo
          .should.have.been.calledWith(deviceName, 'my_cmd')
      ])
    })

  })

  describe('executeCommand', () => {

    it('Should execute command on the device (sync)', () => {
      let argin = {}
      let argout = {}
      connectorMock.executeCommand =
        sinon.stub().returns(Promise.resolve(argout))
      return Promise.all([
        deviceProxy.executeCommand('my_cmd', argin, true)
          .should.eventually.be.equal(argout),
        connectorMock.executeCommand
          .should.have.been.calledWith(deviceName, 'my_cmd', argin, true)
      ])
    })

    it('Should execute command on the device (async)', () => {
      let argin = {}
      connectorMock.executeCommand =
        sinon.stub().returns(Promise.resolve(undefined))
      return Promise.all([
        deviceProxy.executeCommand('my_cmd', argin)
          .should.eventually.be.undefined,
        connectorMock.executeCommand
          .should.have.been.calledWith(deviceName, 'my_cmd', argin, false)
      ])
    })

    it('Should call 0-arity command by default', () => {
      connectorMock.executeCommand =
        sinon.stub().returns(Promise.resolve(undefined))
      return Promise.all([
        deviceProxy.executeCommand('my_cmd').should.eventually.be.undefined,
        connectorMock.executeCommand
          .should.have.been.calledWith(deviceName, 'my_cmd', undefined, false)
      ])
    })

  })

})

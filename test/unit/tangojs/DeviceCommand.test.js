import chai from 'chai'
import sinon from 'sinon'
import chaiAsPromised from 'chai-as-promised'
import sinonChai from 'sinon-chai'
import * as tangojs from '../../../src/tangojs'

chai.use(chaiAsPromised)
chai.use(sinonChai)
chai.should()

/**
 * @test {DeviceCommand}
 */
describe('DeviceCommand', () => {

  let commandName = 'test'

  let deviceProxy

  let deviceCommand

  beforeEach(() => {
    deviceProxy = {}
    deviceCommand = new tangojs.DeviceCommand(deviceProxy, commandName)
  })

  describe('constructor', () => {

    it('Should create new DeviceCommand instance', () => {
      deviceCommand.deviceProxy.should.equal(deviceProxy)
      deviceCommand.commandName.should.equal(commandName)
    })

  })

  describe('execute', () => {

    it('Should execute command (async))', () => {
      let argin = {}
      deviceProxy.executeCommand =
        sinon.stub().returns(Promise.resolve(undefined))
      return Promise.all([
        deviceCommand.execute(argin).should.eventually.be.undefined,
        deviceProxy.executeCommand
          .should.have.been.calledWith(commandName, argin, false)
      ])
    })

    it('Should execute command', () => {
      let argin = {}
      let argout = {}
      deviceProxy.executeCommand = sinon.stub().returns(Promise.resolve(argout))
      return Promise.all([
        deviceCommand.execute(argin, true).should.become(argout),
        deviceProxy.executeCommand
          .should.have.been.calledWith(commandName, argin, true)
      ])
    })

  })

  describe('readInfo', () => {

    it('Should read command info from the device', () => {
      let info = new tangojs.CommandInfo()
      deviceProxy.readCommandInfo = sinon.stub().returns(Promise.resolve(info))
      return Promise.all([
        deviceCommand.readInfo().should.eventually.be.equal(info),
        deviceProxy.readCommandInfo
          .should.have.been.calledWith(commandName)
      ])
    })

  })
})

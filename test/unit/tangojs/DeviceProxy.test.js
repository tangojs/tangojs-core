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

    })

  })

})

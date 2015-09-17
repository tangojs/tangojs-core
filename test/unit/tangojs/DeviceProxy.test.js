import chai from 'chai'
import * as tangojs from '../../../src/tangojs'

const expect = chai.expect

describe('DeviceProxy', () => {

  it('Should return address', () => {
    let proxy = new tangojs.DeviceProxy('myaddr')
    expect(proxy.getAddress()).to.equal('myaddr')
  })

  it('Should give attribute', () => {
    let proxy = new tangojs.DeviceProxy('myaddr')
    let attr = proxy.getAttribute('myattr')
    expect(attr.getAddress()).to.equal('myaddr/myattr')
  })
})

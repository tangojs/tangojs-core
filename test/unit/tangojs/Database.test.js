import chai from 'chai'
import sinon from 'sinon'
import chaiAsPromised from 'chai-as-promised'
import sinonChai from 'sinon-chai'
import * as tangojs from '../../../src/tangojs'

chai.use(chaiAsPromised)
chai.use(sinonChai)
chai.should()

/**
 * This actually tests nothing, since Database class does nothing.
 * It just passess all calls to the connector.
 * @test {Database}
 */
describe('Database', () => {

  let database
  let connector

  beforeEach(() => {
    connector = new tangojs.Connector()
    tangojs.setConnector(connector)
    database = new tangojs.Database()
  })

  describe('readDomains', () => {

    let domains = ['dom1', 'dom2']

    beforeEach(() => {
      sinon.stub(connector, 'dbReadDomains').returns(Promise.resolve(domains))
    })

    it('Should return a list of domains', () =>
      database.readDomains().should.eventually.be.equal(domains)
    )

  })

  describe('readFamilies', () => {

    let families = ['fam1', 'fam2']

    beforeEach(() => {
      let stub = sinon.stub(connector, 'dbReadFamilies')
      stub.withArgs('dom1').returns(Promise.resolve(families))
      stub.withArgs('dom2').returns(Promise.reject(new Error()))
    })

    it('Should return a list of families in a domain', () =>
      database.readFamilies('dom1').should.eventually.be.equal(families)
    )

    it('Should fail with non-existing domain', () =>
      database.readFamilies('dom2').should.eventually.be.rejected
    )

  })

  describe('readMembers', () => {

    let members = ['mem1', 'mem2']

    beforeEach(() => {
      let stub = sinon.stub(connector, 'dbReadMembers')
      stub.withArgs('dom1', 'fam1').returns(Promise.resolve(members))
      stub.returns(Promise.reject(new Error()))
    })

    it('Should return a list of members in a family', () =>
      database.readMembers('dom1', 'fam1').should.eventually.be.equal(members)
    )

    it('Should fail with non-existing domain', () =>
      database.readMembers('foo', 'fam1').should.eventually.be.rejected
    )

    it('Should fail with non-existing family', () =>
      database.readMembers('dom1', 'foo').should.eventually.be.rejected
    )

  })

})

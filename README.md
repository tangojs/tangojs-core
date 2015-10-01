# tangojs

[ ![Build Status](https://img.shields.io/travis/mliszcz/tangojs.svg)
](https://travis-ci.org/mliszcz/tangojs)
[ ![Coverage](https://img.shields.io/codecov/c/github/mliszcz/tangojs.svg)
](https://codecov.io/github/mliszcz/tangojs)
![dependencies](https://img.shields.io/david/mliszcz/tangojs.svg)
![dev dependencies](https://img.shields.io/david/dev/mliszcz/tangojs.svg)
[ ![npm version](https://img.shields.io/npm/v/tangojs.svg)
](https://www.npmjs.com/package/tangojs)

TANGO Control System client library for web browsers.

## Examples
```javascript
import tangojs from 'tangojs'
import { MyConnectorImpl } from 'my-tangojs-connector'

let conn = new MyConnectorImpl(...)
tangojs.setConnector(conn)

let devProxy  = new tangojs.DeviceProxy('tangojs/test/1')
let attrProxy = devProxy.createDeviceAttribute('number_scalar')
let cmdProxy  = devProxy.createDeviceCommand('double')

let sync = true
let value = 32

devProxy.readAttributesList()

  .then(attributes =>
    console.log('Attributes:', attributes)
  )

  .then(() => attrProxy.readValue())
  .then(response => {
    console.log(`Reading value: ${response.argout}`)
    console.log(`Writing value: ${value} (sync)`)
  })

  .then(() => attrProxy.writeValue(value, sync))
  .then(response =>
    console.log(`Stored value: ${response.argout}`)
  )

  .then(() => cmdProxy.execute(value, sync))
  .then(response =>
    console.log(`Command 'double': 2*${value} is ${response.argout}`)
  )

  .catch(console.log)

```

## Installation

Install it via npm:
```shell
npm install tangojs
```

And include in your project:
```javascript
import tangojs from 'tangojs'
```

Or use Bower:
```shell
bower install tangojs
```

And load it directly in the browser (this attaches `tangojs` object to the `window`):
```html
<script type="text/javascript">tangojs/lib/tangojs.js</script>
```

## Connectors
TangoJS is designed to support multiple *connectors* (backends).
A connector is basically a low-level proxy between TangoJS
and server-side implementation. You can use one of existing
connectors or implement your own (refer to the
[`Connector`](https://mliszcz.github.io/tangojs/class/src/tangojs/Connector.js~Connector.html)
interface in the docs).

Available connectors:

* [`tangojs-connector-local`](https://github.com/mliszcz/tangojs-connector-local)
* `tangojs-connector-mtango` *TODO*
* `tangojs-connector-websocket` *TODO*

## Documentation
API docs are available [here](http://mliszcz.github.io/tangojs).

## License
MIT

## References

* https://bitbucket.org/hzgwpn/mtango/wiki/Tango%20REST%20API%20Proposal.%20Ver.%200.1

* https://bitbucket.org/hzgwpn/mtango/wiki/mTango%20REST%20API

* http://www.esrf.eu/computing/cs/tango/tango_doc/kernel_doc/ds_prog/node13.html

* http://www.esrf.eu/computing/cs/tango/tango_doc/kernel_doc/ds_prog/node4.html

* http://www.esrf.eu/computing/cs/tango/tango_doc/kernel_doc/ds_prog/node3.html

* http://www.esrf.eu/computing/cs/tango/tango_doc/kernel_doc/ds_prog/node6.html

* http://www.esrf.eu/computing/cs/tango/tango_doc/kernel_doc/tango_java_api/

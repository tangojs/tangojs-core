# tangojs

[ ![Build Status](https://img.shields.io/travis/mliszcz/tangojs.svg)
](https://travis-ci.org/mliszcz/tangojs)
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

let devProxy = new tangojs.proxy.DeviceProxy('tangojs/test/1')

devProxy.get_attribute_list().then(attributes =>
  console.log(`Attributes: ${attributes}`)
)

let attProxy = new tangojs.proxy.AttributeProxy(
  'tangojs/test/1/number_scalar')

let in = new tangojs.struct.AttributeValue({
  value: 32
})

attProxy.write(in)

attProxt.read().then(outVal =>
  console.log(`Value: ${outVal.value}`)
)

let cmdProxy = new tangojs.proxy.CommandProxy('tangojs/test/1/double')

let argin = new tangojs.struct.DeviceData(10)

cmdProxy.inout(argin).then(result =>
  console.log(`Command: 2*10 = ${result.value}`)
)


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

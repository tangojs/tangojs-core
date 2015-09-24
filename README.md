# tangojs

![Build Status](https://img.shields.io/travis/mliszcz/tangojs.svg)
![Coverage](https://img.shields.io/codecov/c/github/mliszcz/tangojs.svg)
![dependencies](https://img.shields.io/david/mliszcz/tangojs.svg)
![dev dependencies](https://img.shields.io/david/dev/mliszcz/tangojs.svg)
![npm version](https://img.shields.io/npm/v/tangojs.svg)

TANGO Control System client library for web browsers.

## Demo
```javascript
import tangojs from 'tangojs'
import myTangojsConnector from 'my-tangojs-connector'

let connector = myTangojsConnector.create(...)

tangojs.setConnector(my)

let proxy = new tangojs.DeviceProxy('my/dev/01')

proxy.getStatus().then(status => {
  console.log(status)
})

let attribute = proxy.createDeviceAttribute('scalar1')
let sync = true

attribute.writeValue(10, sync).then((result) =>
  assert(result.value == 10)
})

```

## Getting Started

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
Tangojs is designed to support multiple *connectors* (backends).
A connector is basically a low-level proxy between Tangojs
and server-side implementation. You can use one of existing
connectors or implement your own (refer to the `Connector` interface in the docs).

Available connectors:

* `tangojs-connector-local` *TODO*
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

# gRPC Demo

### Prerequisites

- node: This requires Node 0.12.x or greater.

### Install

```bash
$ # from this directory
$ npm install
```

### Try it

There are two ways to generate the code needed to work with protocol buffers in Node.js - one approach uses Protobuf.js to dynamically generate the code at runtime, the other uses code statically generated using the protocol buffer compiler protoc. The examples behave identically, and either server can be used with either client.

- Run the Server

```bash
$ # from this directory
$ node server.js
$ # OR
$ node static/server.js
```

- Run the client

```bash
$ # from this directory
$ node client.js add 2 3
$ # OR
$ node static/client.js minus 3 2
```

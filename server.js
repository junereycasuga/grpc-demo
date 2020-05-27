const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

const packageDefinition = protoLoader.loadSync('./math.proto');
const proto = grpc.loadPackageDefinition(packageDefinition);

function add(call, callback) {
  callback(null, { answer: call.request.first + call.request.second });
}

function subtract(call, callback) {
  callback(null, { answer: call.request.first - call.request.second });
}

function multiply(call, callback) {
  callback(null, { answer: call.request.first * call.request.second });
}

function divide(call, callback) {
  callback(null, { answer: call.request.first / call.request.second });
}

const server = new grpc.Server();
server.addService(proto.Math.service, {
  add,
  subtract,
  divide,
  multiply,
});
server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
server.start();

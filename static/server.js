const grpc = require('grpc');

const messages = require('./math_pb');
const services = require('./math_grpc_pb');

function add(call, callback) {
  const reply = new messages.MathResponse();
  reply.setAnswer(call.request.getFirst() + call.request.getSecond());
  callback(null, reply);
}

function subtract(call, callback) {
  const reply = new messages.MathResponse();
  reply.setAnswer(call.request.getFirst() - call.request.getSecond());
  callback(null, reply);
}

function multiply(call, callback) {
  const reply = new messages.MathResponse();
  reply.setAnswer(call.request.getFirst() * call.request.getSecond());
  callback(null, reply);
}

function divide(call, callback) {
  const reply = new messages.MathResponse();
  reply.setAnswer(call.request.getFirst() / call.request.getSecond());
  callback(null, reply);
}

const server = new grpc.Server();
server.addService(services.MathService, {
  add,
  subtract,
  divide,
  multiply,
});
server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
server.start();

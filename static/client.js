const grpc = require('grpc');

const messages = require('./math_pb');
const services = require('./math_grpc_pb');

const client = new services.MathClient(
  'node-service',
  grpc.credentials.createInsecure()
);
const request = new messages.MathRequest();

const operation = process.argv[2];
const firstNumber = process.argv[3];
const secondNumber = process.argv[4];

request.setFirst(firstNumber);
request.setSecond(secondNumber);

client[operation](request, (err, response) => {
  console.log(response.getAnswer());
});

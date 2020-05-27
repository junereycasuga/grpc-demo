const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

const packageDefinition = protoLoader.loadSync('./math.proto');
const proto = grpc.loadPackageDefinition(packageDefinition);

const mathService = new proto.Math(
  'localhost:50051',
  grpc.credentials.createInsecure()
);

const operation = process.argv[2];
const firstNumber = process.argv[3];
const secondNumber = process.argv[4];

mathService[operation](
  { first: firstNumber, second: secondNumber },
  (err, response) => {
    console.log(response.answer);
  }
);

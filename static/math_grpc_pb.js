// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var math_pb = require('./math_pb.js');

function serialize_MathRequest(arg) {
  if (!(arg instanceof math_pb.MathRequest)) {
    throw new Error('Expected argument of type MathRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_MathRequest(buffer_arg) {
  return math_pb.MathRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MathResponse(arg) {
  if (!(arg instanceof math_pb.MathResponse)) {
    throw new Error('Expected argument of type MathResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_MathResponse(buffer_arg) {
  return math_pb.MathResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var MathService = exports.MathService = {
  add: {
    path: '/Math/add',
    requestStream: false,
    responseStream: false,
    requestType: math_pb.MathRequest,
    responseType: math_pb.MathResponse,
    requestSerialize: serialize_MathRequest,
    requestDeserialize: deserialize_MathRequest,
    responseSerialize: serialize_MathResponse,
    responseDeserialize: deserialize_MathResponse,
  },
  subtract: {
    path: '/Math/subtract',
    requestStream: false,
    responseStream: false,
    requestType: math_pb.MathRequest,
    responseType: math_pb.MathResponse,
    requestSerialize: serialize_MathRequest,
    requestDeserialize: deserialize_MathRequest,
    responseSerialize: serialize_MathResponse,
    responseDeserialize: deserialize_MathResponse,
  },
  multiply: {
    path: '/Math/multiply',
    requestStream: false,
    responseStream: false,
    requestType: math_pb.MathRequest,
    responseType: math_pb.MathResponse,
    requestSerialize: serialize_MathRequest,
    requestDeserialize: deserialize_MathRequest,
    responseSerialize: serialize_MathResponse,
    responseDeserialize: deserialize_MathResponse,
  },
  divide: {
    path: '/Math/divide',
    requestStream: false,
    responseStream: false,
    requestType: math_pb.MathRequest,
    responseType: math_pb.MathResponse,
    requestSerialize: serialize_MathRequest,
    requestDeserialize: deserialize_MathRequest,
    responseSerialize: serialize_MathResponse,
    responseDeserialize: deserialize_MathResponse,
  },
};

exports.MathClient = grpc.makeGenericClientConstructor(MathService);

// src/swagger.ts
const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Movie Review API',
    description: 'API Documentation for Movie Review App',
  },
  host: 'localhost:5004',
  schemes: ['http'],
  tags: [
    
  ],
};

const outputFile = '../swagger_output.json'; // output file
// const endpointsFiles = ['./src/index.ts']; // your main entry point
const endpointsFiles = ['./index.ts'] // your main entry point

swaggerAutogen(outputFile, endpointsFiles, doc);

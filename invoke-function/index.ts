import AWS from 'aws-sdk';
import createPayload from './payload';

AWS.config.region = process.env.AWS_REGION;
const lambda = createLamdaInstance();

export type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export interface InvokeParams<T> {
  functionName: string,
  path: string,
  querystring: any,
  data: T,
  method: RequestMethod,
}

function isLocalEnvironment() {
  return process.env.NODE_ENV === 'local';
}

function createLamdaInstance() {
  if (isLocalEnvironment()) {
    return new AWS.Lambda({ endpoint: 'http://localhost:4566' });
  } else {
    return new AWS.Lambda();
  }
}

async function invokeFunction<T, R>(params: InvokeParams<T>) {
  const lambdaParams : AWS.Lambda.Types.InvocationRequest = {
    FunctionName: params.functionName,
    InvocationType: 'RequestResponse',
    LogType: 'Tail',
    Payload: createPayload(),
  }
  const response = await lambda.invoke(lambdaParams).promise();
  const responseAsJson = response.Payload?.toString();
  if (!responseAsJson) {
    return undefined;
  }
  const payload = JSON.parse(responseAsJson);
  return payload.body;
}

export default invokeFunction;
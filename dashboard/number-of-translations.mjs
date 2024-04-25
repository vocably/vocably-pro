import { config } from 'dotenv-flow';
config();

import AWS from 'aws-sdk';
import 'zx/globals';

console.log(process.env);

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET,
  region: 'eu-central-1',
});

// Load AWS SDK and create new service objects
const cloudwatch = new AWS.CloudWatch({});
const lambda = new AWS.Lambda({});

const daysAgo = process.argv[2] ?? 1;

// Specify the time range for the CloudWatch metrics
const oneDayAgo = new Date();
oneDayAgo.setDate(oneDayAgo.getDate() - daysAgo);

// Call the Lambda listFunctions method
const listFunctionsPromise = lambda.listFunctions().promise();

// Define function to retrieve CloudWatch metrics data
const getMetricsData = async (FunctionName) => {
  const params = {
    EndTime: new Date(),
    StartTime: oneDayAgo,
    MetricName: 'Invocations',
    Namespace: 'AWS/Lambda',
    Period: 86400 * daysAgo,
    Statistics: ['Sum'],
    Dimensions: [
      {
        Name: 'FunctionName',
        Value: FunctionName,
      },
    ],
  };

  return cloudwatch.getMetricStatistics(params).promise();
};

// Use the promise .then() method to handle the response
listFunctionsPromise.then(async (data) => {
  const functionsData = await Promise.all(
    data.Functions.map((func) => getMetricsData(func.FunctionName))
  );
  const invocationCounts = functionsData.map((metricData, index) => ({
    FunctionName: data.Functions[index].FunctionName,
    Invocations: metricData.Datapoints[0] ? metricData.Datapoints[0].Sum : 0,
  }));

  invocationCounts.sort((a, b) => b.Invocations - a.Invocations);

  console.log(invocationCounts.slice(0, 5));
});

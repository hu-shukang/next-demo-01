#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkStack } from '../lib/cdk-stack';

const synthesizer = new cdk.CliCredentialsStackSynthesizer({
  fileAssetsBucketName: 'hsk-cdk-working',
  bucketPrefix: `next-demo01`,
  qualifier: `next-demo01`,
});

const app = new cdk.App({ defaultStackSynthesizer: synthesizer });

new CdkStack(app, 'next-demo-01', {
  stackName: 'next-demo-01',
  synthesizer,
});

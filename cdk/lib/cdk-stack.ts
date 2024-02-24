import * as cdk from 'aws-cdk-lib';
import { Duration } from 'aws-cdk-lib';
import { HttpApi } from 'aws-cdk-lib/aws-apigatewayv2';
import { HttpLambdaIntegration } from 'aws-cdk-lib/aws-apigatewayv2-integrations';
import { Repository } from 'aws-cdk-lib/aws-ecr';
import { Platform } from 'aws-cdk-lib/aws-ecr-assets';
import { Role } from 'aws-cdk-lib/aws-iam';
import { Architecture, DockerImageCode, DockerImageFunction } from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

export class CdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id);

    const lambdaAccessRole = Role.fromRoleArn(
      this,
      'LambdaAccessRole',
      'arn:aws:iam::146114061358:role/LambdaAccessRole',
    );

    const repository = Repository.fromRepositoryName(this, 'ECRRepository', 'next-app');
    const dockerImageCode = DockerImageCode.fromEcr(repository, {
      tagOrDigest: '5a438c6',
    });

    // Lambdaの定義
    const handler = new DockerImageFunction(this, 'Handler', {
      functionName: 'NextHandler',
      code: dockerImageCode,
      memorySize: 256,
      timeout: Duration.seconds(30),
      role: lambdaAccessRole,
      architecture: Architecture.ARM_64,
    });

    // API GatewayIの定義
    new HttpApi(this, 'Api', {
      apiName: 'Frontend',
      defaultIntegration: new HttpLambdaIntegration('Integration', handler),
    });
  }
}

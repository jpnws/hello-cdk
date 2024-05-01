import { Stack, App, StackProps, CfnOutput, RemovalPolicy } from "aws-cdk-lib";
import { Bucket } from "aws-cdk-lib/aws-s3";

export class HelloCdkStack extends Stack {
  constructor(scope: App, id: string, props?: StackProps) {
    super(scope, id, props);

    const bucket = new Bucket(this, "MyCoolBucket", {
      versioned: true,
      removalPolicy: RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });

    new CfnOutput(this, "BucketName", {
      value: bucket.bucketName,
      description: "The name of the bucket",
    });
  }
}

import { Construct } from 'constructs';
import { App, Chart, ChartProps } from 'cdk8s';
import * as kplus from 'cdk8s-plus-25'

export class MyChart extends Chart {
  constructor(scope: Construct, id: string, props: ChartProps = {}) {
    super(scope, id, props);
    const port = 8080;
    const deployment = new kplus.Deployment(this, 'Deployment', {
      containers: [{ image: 'gcr.io/google-samples/hello-app:1.0', port: port }]
    });

    deployment.exposeViaIngress('/', {
      serviceType: kplus.ServiceType.NODE_PORT,
    })


  }
}

const app = new App();
new MyChart(app, 'my-ingress-plus');
app.synth();

import { Construct } from 'constructs';
import { App, Chart, ChartProps } from 'cdk8s';
import { KubeDeployment, KubeService, IntOrString } from './imports/k8s';
export class HelloChart extends Chart {
  constructor(scope: Construct, id: string, props: ChartProps = {}) {
    super(scope, id, props);

    const helloLabel = { app: 'hello-k8s' }

    new KubeDeployment(this, 'deployment', {
      spec: {
        replicas: 2,
        selector: { matchLabels: helloLabel },
        template: {
          metadata: { labels: helloLabel },
          spec: {
            containers: [
              {
                name: 'my-hello-world',
                image: 'my-hello-world',
                ports: [{ containerPort: 80 }],
                imagePullPolicy: 'Never'
              }
            ]
          }
        }
      }
    });
    new KubeService(this, 'service', {
      spec: {
        type: 'NodePort',
        ports: [{ port: 80, targetPort: IntOrString.fromNumber(80) }],
        selector: helloLabel
      }
    })

  }
}

const app = new App();
new HelloChart(app, 'my-hello-world');
app.synth();

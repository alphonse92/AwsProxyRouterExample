import { AwsProxyRouter } from 'simple-lambda-api-router/dist/classes';
import HealthController from './health';

const router = new AwsProxyRouter();
router.use('/health/:parameter/status/:optional?', HealthController);
const handler = router.expose();

export default handler;

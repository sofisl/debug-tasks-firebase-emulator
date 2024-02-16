import { logger } from 'firebase-functions/v1';
import { onRequest } from 'firebase-functions/v2/https';
import { initializeApp } from 'firebase-admin/app';
import { CloudTasksClient } from '@google-cloud/tasks'; 
import {SecretManagerServiceClient} from '@google-cloud/secret-manager'
initializeApp();


const testFunction = onRequest(async (request, response) => {

  logger.info('Hello testFunction!');

  const queues = await cloudTask('projects/coleleah-sofialeon/locations/us-central1');

  const secrets = await secretManager('projects/coleleah-sofialeon')
  response.send(`Firebase function run OK with cloudTask client: ${JSON.stringify(queues)}, ${JSON.stringify(secrets)}`);
});

exports.testFunction = testFunction;


async function cloudTask(parent: string) {
    const tasksClient = new CloudTasksClient(); 

    return await tasksClient.listQueues({parent});
    // [END cloudtasks_v2_generated_CloudTasks_ListQueues_async]
  }

  async function secretManager(parent: string) {
    const secretmanagerclient = new SecretManagerServiceClient();
    return await secretmanagerclient.listSecrets({parent})

  }
  
//   process.on('unhandledRejection', err => {
//     process.exitCode = 1;
//   });
//   main(process.argv.slice(2)[0]);

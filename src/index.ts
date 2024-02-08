import { logger } from 'firebase-functions/v1';
import { onRequest } from 'firebase-functions/v2/https';
import { initializeApp } from 'firebase-admin/app';
import { CloudTasksClient } from '@google-cloud/tasks'; 

initializeApp();


const testFunction = onRequest(async (request, response) => {

  logger.info('Hello testFunction!');

  await cloudTask('your project');

  response.send(`Firebase function run OK with cloudTask client`);
});

exports.testFunction = testFunction;


async function cloudTask(parent: string) {
    const tasksClient = new CloudTasksClient(); 
    async function callListQueues() {
    // just checking tasksClient is not empty
      await tasksClient.close();
    }
  
    callListQueues();
    // [END cloudtasks_v2_generated_CloudTasks_ListQueues_async]
  }
  
//   process.on('unhandledRejection', err => {
//     process.exitCode = 1;
//   });
//   main(process.argv.slice(2)[0]);
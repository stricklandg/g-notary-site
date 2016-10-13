/**
 * Created by gregorydrake on 9/21/16.
 */
import filesForBatching from './queueForBatching';
import FutureTasks from '../../lib/collections/futuretasks';
var soap = require('soap');
var url = 'https://sosdirectws.sos.state.tx.us/enotary/enotary.asmx?wsdl';

export default function pushToSOS () {

    async function waiter() {

        var captureE = null;
        var captureR = null;
        try {
            var objectToSend = await filesForBatching(FutureTasks);
            soap.createClient(url, function (err, client) {
                client.QueueApplications(objectToSend, function (err, result) {
                    captureE = err;
                    captureR = result;
                    console.log(captureR);
                    console.log(captureE);

                })
            });

        } catch (error) {
            if (error) {
            }
        } finally {
        }

    }

    waiter();

}
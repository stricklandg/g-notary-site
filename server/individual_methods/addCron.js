/**
 * Created by gregorydrake on 9/21/16.
 */
import pushToSOS from './pushToSOS';
import FutureTasks from '../../lib/collections/futuretasks';

export default function scheduleCron() {

    SyncedCron.add({
        name: 'Push to SOS',
        schedule: function (parser) {
          return parser.text('at 4:00 pm');
        },
        job: function () {
            pushToSOS();
            SyncedCron.remove('Push to SOS');
        }
    });

    SyncedCron.add({
        name: 'Remove FutureTasks',
        schedule: function(parser) {
            return parser.text('at 4:05 pm');
        },
        job: function() {
            FutureTasks.remove({});
        }
    });

}
import { Tracker } from 'meteor/tracker';
import { eventChannel, takeEvery } from 'redux-saga';
import { take, call, put, fork} from 'redux-saga/effects';

export const METEOR_FETCH_DATA = 'METEOR_FETCH_DATA';


function fetchData(Collection) {
    const entityName = Collection._name;
    return eventChannel(dispatch => {
        const computation = Tracker.autorun(() => {
            const data = Collection.find().fetch();
            setTimeout(()=> dispatch({data, entityName}), 0);
        });
        //Unsubscribe function required in this subscribe function
        return () => {
            computation.stop();
        }

    });
}

function* observe(channel, collectionName) {
      while(true) {
          const newType = (`${METEOR_FETCH_DATA}_${collectionName}`);
          const event = yield take(channel);
          yield put({type: newType, ...event});
          yield fork(takeEvery, 'STOP_EVENT', channel.close);
      }
}

export default function* meteorDataSaga(Collections) {
    const channels = [];
    for (let Collection of Collections.observee) {
        channels.push({yieldAction: yield call(fetchData, Collection), collection: Collection._name});
    }
    const observers = channels.map(channel => {
            var theChannel = channel.yieldAction;
            var theCollection = channel.collection;

            return observe(theChannel, theCollection)
        });
    yield observers;
}
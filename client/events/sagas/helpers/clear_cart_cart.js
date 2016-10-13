/**
 * Created by gregorydrake on 9/8/16.
 */
import  localforage  from 'localforage';

export default function clearCartCache(key) {

    var newStuff = localforage.removeItem(key);

    newStuff.then(value=> {});



};
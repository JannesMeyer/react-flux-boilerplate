import EventEmitter from 'eventemitter3';
import Constants  from '../flux/Constants';
import Dispatcher from '../flux/Dispatcher';

/**
 * Global Store singleton
 */
var Store = new EventEmitter();

// Store.dispatcherToken = Dispatcher.register(action => {
//   switch (action.type) {
//   }
// });

export default Store;
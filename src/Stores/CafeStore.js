import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Client } from '../Client.js';

let unsubscribe = new Subject();
let changeListeners = [];
let cafes = [];

let notifyChange = () => {
  changeListeners.forEach(listener => {
    listener();
  });
};

class CafeDataStore {

  provideCompanyCafes() {
    notifyChange();

    let query = Client.items()
        .type('cafe')
        .orderParameter('system.name');

    query
        .toObservable()
        .pipe(takeUntil(unsubscribe))
        .subscribe(response => {
          cafes = response.items;
          notifyChange();
        });
  }

  getCompanyCafes() {
    return cafes;
  }

  addChangeListener(listener) {
    changeListeners.push(listener);
  }

  removeChangeListener(listener) {
    changeListeners = changeListeners.filter(element => {
      return element !== listener;
    });
  }

  unsubscribe() {
    unsubscribe.next();
    unsubscribe.complete();
    unsubscribe = new Subject();
  }
}
let CafeStore = new CafeDataStore();

export { CafeStore };

import localforage from 'localforage';

function setUserInLocalStorage(storageKey,setValue) {
    var value = localforage.setItem(storageKey, `${setValue}`);
    value.then((value) => {})
}

export default setUserInLocalStorage;
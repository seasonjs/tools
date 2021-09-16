import localforage from 'localforage';

export const store = localforage.createInstance({
  driver: localforage.LOCALSTORAGE,
  name: 'seasonStore',
});

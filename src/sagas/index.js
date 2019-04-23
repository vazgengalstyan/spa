import {takeLatest, all } from 'redux-saga/effects'
import {getDataInStorage} from './getDataInStorage'
import {synchronize} from './synchronize'
import {saveImages} from './saveImages'
import {GET_DATA_IN_STORAGE,SYNCHRONIZE,SAVE_IMAGES} from '../actionsTypes'

function* actionWatcher() {
    yield takeLatest(GET_DATA_IN_STORAGE, getDataInStorage);
    yield takeLatest(SYNCHRONIZE, synchronize);
    yield takeLatest(SAVE_IMAGES, saveImages);
}
export default function* rootSaga() {
    yield all([
        actionWatcher()
    ]);
}

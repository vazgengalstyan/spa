import { put, all } from 'redux-saga/effects'
import {AsyncStorage} from 'react-native'
import {SET_DATA_IN_STORE,SET_HOME_LOADER_VISIBLE} from '../actionsTypes'

function* getDataInStorage() {

    try {

        let data = [];
        let keys = [];

        yield AsyncStorage.getAllKeys((err, k) => {
            keys = k;
        });

        yield AsyncStorage.multiGet(keys, (err, stores) => {
            stores.map((result, i, store) => {
                let res = JSON.parse(store[i][1]);
                data.push(res)
            });
        });

        yield all([
            put({type: SET_DATA_IN_STORE,  payload: {data: data}}),
            put({type: SET_HOME_LOADER_VISIBLE,  payload: {visible: false}})
            ])

    } catch (e) {

        console.log(e.toString());

    }

}

export {getDataInStorage}
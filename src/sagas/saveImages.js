import { put,all } from 'redux-saga/effects';
import {AsyncStorage, Platform} from 'react-native'
import {SET_DATA_IN_STORE, SET_HOME_LOADER_VISIBLE} from '../actionsTypes'
import RNFetchBlob from "react-native-fetch-blob"

function* saveImages(data) {
    try {

        let imageSave = async (data)=>{

            for(let i=0; i < data.length;  i++){
                await RNFetchBlob
                    .config({
                        fileCache : true,
                        session : 'foo',
                        appendExt : 'png'
                    })
                    .fetch('GET', data[i].img, {
                    })
                    .then((res) => {
                        data[i].img =  Platform.OS === 'android' ? 'file://' + res.path() : '' + res.path();
                    });

                if(data[i].categories){

                    await imageSave(data[i].categories)

                }

            }

        };

        yield imageSave(data.payload.data).then(()=>{

            for(let i=0; i < data.payload.data.length;  i++){

                AsyncStorage.setItem(i.toString(), JSON.stringify(data.payload.data[i]));

            }

            console.log("synchronized successful");

        });

        yield all([
            put({type: SET_DATA_IN_STORE,  payload: {data: data.payload.data}}),
            put({type: SET_HOME_LOADER_VISIBLE,  payload: {visible: false}})
        ]);

    } catch (e) {
        console.log(e.toString());
    }
}

export {saveImages}
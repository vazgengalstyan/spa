import { put, all } from 'redux-saga/effects';
import {Alert, AsyncStorage} from 'react-native'
import NetInfo from "@react-native-community/netinfo"
import {SET_DATA_IN_STORE, SAVE_IMAGES, SET_HOME_LOADER_VISIBLE} from '../actionsTypes'
import RNFetchBlob from "react-native-fetch-blob"
import axios from 'axios'

function* synchronize() {
    try {

        let isOnline,connectionType;

        yield NetInfo.isConnected.fetch().then(res=>{

            isOnline = res;

        });

        if(isOnline){

            yield  NetInfo.getConnectionInfo().then(result=>{

                connectionType = result.type;

            });

            if( connectionType === 'wifi'){

                yield all([
                    put({type: SET_DATA_IN_STORE, payload: {data: []}}),
                    put({type: SET_HOME_LOADER_VISIBLE, payload: {visible: true}})
                ]);
                const dirs = RNFetchBlob.fs.dirs;
                yield RNFetchBlob.fs.unlink(dirs.DocumentDir).then(() => {
                    console.log("file is deleted")
                }).catch((err) => {
                    console.log("err",err)
                });
                const response = yield axios.get('http://spa.brainfors.am/api/get_data');
                yield AsyncStorage.clear();
                yield put({type: SAVE_IMAGES,  payload: {data: response.data}});

            }else {

                Alert.alert(
                    'Вы не подключены через WiFi.',
                    '',
                    [
                        {text: 'ОК', onPress: () => {}},
                    ],
                    { cancelable: false }
                );

            }

        }else {

            Alert.alert(
                'Нет подключения к интернету.',
                '',
                [
                    {text: 'ОК', onPress: () => {}},
                ],
                { cancelable: false }
            );

        }
    } catch (e) {
        console.log(e.toString());
    }
}

export {synchronize}
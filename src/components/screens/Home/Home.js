import React, {Component} from 'react'
import NetInfo from "@react-native-community/netinfo"
import RNFetchBlob from "react-native-fetch-blob"
import {setDataStore} from '../../../actions'
import {connect} from 'react-redux'
import axios from "axios"
import {View, StatusBar, FlatList, AsyncStorage, Platform, Alert, ActivityIndicator} from 'react-native'
import {HeaderHome,CategoriItem} from '../../uikit'
import styles from './styles'
console.disableYellowBox = true;

class Home extends Component {

    async componentDidMount(){

        AsyncStorage.getAllKeys((err, keys) => {
            AsyncStorage.multiGet(keys, (err, stores) => {
                let data = [];
                stores.map((result, i, store) => {
                    let res = JSON.parse(store[i][1]);
                    data.push(res)
                });
                this.props.setDataStore(data);
            });
        });

    }


    synchronize = async ()=>{

        NetInfo.isConnected.fetch().then(isOnline=>{

            if(isOnline){

                NetInfo.getConnectionInfo().then(async (connection)=>{

                    if(connection.type === 'wifi'){

                        this.props.setDataStore([]);
                        const dirs = RNFetchBlob.fs.dirs;
                        await RNFetchBlob.fs.unlink(dirs.DocumentDir).then(() => { console.log("file is deleted") }).catch((err) => { console.log("err",err) });

                        axios.get('http://spa.brainfors.am/api/get_data')
                            .then(async (response)=>{

                                await AsyncStorage.clear(async ()=>{

                                    let data = response.data;
                                    await this.saveImage(data).then(()=>{

                                        for(let i=0; i < data.length;  i++){

                                            AsyncStorage.setItem(i.toString(), JSON.stringify(data[i]));

                                        }
                                        this.props.setDataStore(data);
                                    })

                                });

                            })
                            .catch(function (error) {
                                console.log(error);
                            });

                    } else {

                        Alert.alert(
                            'Вы не подключены через WiFi.',
                            '',
                            [
                                {text: 'ОК', onPress: () => {}},
                            ],
                            { cancelable: false }
                        );

                    }

                })

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

        });

    };

    saveImage = async (data)=>{

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

               await this.saveImage(data[i].categories)

           }

        }

    };

    categoryItemPress = (item)=>{

        this.props.navigation.navigate('List',{data: item})

    };

    basketPress = ()=>{

        this.props.navigation.navigate('Basket')

    };

    render() {

        const {container} = styles;
        const {data,selectedItems} = this.props;
        return (
            <View style={container}>

                <StatusBar hidden={true}/>

                <HeaderHome
                    data={selectedItems}
                    basketPress={this.basketPress}
                    synchronizePress={()=>{

                        Alert.alert(
                            'Синхронизировать? ',
                            'Это может занять несколько минут. Не отключаете интернет.',
                            [
                                {text: 'ОТМЕНА', onPress: () => {return false}, style: 'cancel'},
                                {text: 'ОК', onPress: async () => {await this.synchronize();}},
                            ],
                            { cancelable: false }
                        )

                    }}/>

                <FlatList
                    data={data}
                    numColumns={2}
                    renderItem={({item})=>{
                        return <CategoriItem data={item} onPress={()=>{this.categoryItemPress(item)}}/>
                    }}
                    keyExtractor={(item, index) => index.toString()}
                />

                {!data.length && <View style={{width: '100%', height: '100%', justifyContent: 'center'}}>

                    <ActivityIndicator size="large" color="rgb(0,0,0)" />

                </View>}

            </View>
        );

    }
}

const mapStateToProps = store =>{
    return {
        ...store.data,
        ...store.selectedItems
    }
};

export default connect(mapStateToProps,{setDataStore})(Home)
import React, {Component} from 'react'
import NetInfo from "@react-native-community/netinfo"
import RNFetchBlob from "react-native-fetch-blob"
import {setDataStore} from '../../../actions'
import {connect} from 'react-redux'
import axios from "axios"
import {View, StatusBar, FlatList,ImageBackground, AsyncStorage, Platform, Alert, ActivityIndicator, Text} from 'react-native'
import {HeaderHome,CategoriItem} from '../../uikit'
import styles from './styles'
console.disableYellowBox = true;

class Home extends Component {

    state = {
        loader: false,
        dataEmpty: false
    };

    async componentDidMount(){

        AsyncStorage.getAllKeys((err, keys) => {
            AsyncStorage.multiGet(keys, (err, stores) => {
                let data = [];
                stores.map((result, i, store) => {
                    let res = JSON.parse(store[i][1]);
                    data.push(res)
                });
                if(!data.length){
                    this.setState({dataEmpty: true})
                }
                this.props.setDataStore(data);
            });
        });

    }


    synchronize = async ()=>{

        NetInfo.isConnected.fetch().then(isOnline=>{

            if(isOnline){

                NetInfo.getConnectionInfo().then(async (connection)=>{

                    if(connection.type === 'wifi'){

                        this.setState({loader: true})
                        this.props.setDataStore([]);
                        const dirs = RNFetchBlob.fs.dirs;
                        await RNFetchBlob.fs.unlink(dirs.DocumentDir).then(() => {
                            console.log("file is deleted")
                        }).catch((err) => {
                            console.log("err",err)
                        });

                        axios.get('http://spa.brainfors.am/api/get_data')
                            .then(async (response)=>{

                                await AsyncStorage.clear(async ()=>{

                                    let data = response.data;
                                    await this.saveImage(data).then(()=>{

                                        for(let i=0; i < data.length;  i++){

                                            AsyncStorage.setItem(i.toString(), JSON.stringify(data[i]));

                                        }
                                        this.props.setDataStore(data);
                                        console.log("synchronized successful")
                                        this.setState({loader: false, dataEmpty: false})
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

        const {container,emptyDataContainer} = styles;
        const {data,selectedItems} = this.props;
        const {loader,dataEmpty} = this.state;
        return (
            <ImageBackground style={container} source={require('../../../images/fon.jpg')}>

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
                    style={{marginTop: -10}}
                    data={data}
                    numColumns={2}
                    renderItem={({item})=>{
                        return <CategoriItem data={item} onPress={()=>{this.categoryItemPress(item)}}/>
                    }}
                    keyExtractor={(item, index) => index.toString()}
                />

                {loader && <View style={emptyDataContainer}>

                    <ActivityIndicator size="large" color="rgb(0,0,0)" />

                </View>}

                {dataEmpty && <View style={emptyDataContainer}>

                    <Text style={{fontSize: 24, color: 'rgb(0,0,0)'}}>Сделайте синхронизацию.</Text>

                </View>}

            </ImageBackground>
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
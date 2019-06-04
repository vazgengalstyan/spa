import React, {Component} from 'react'
import NetInfo from "@react-native-community/netinfo"
import RNFetchBlob from "react-native-fetch-blob"
import {setDataStore} from '../../../actions'
import {connect} from 'react-redux'
import axios from "axios"
import Dialog from "react-native-dialog"
import {View, StatusBar, FlatList,ImageBackground, AsyncStorage, Platform, Alert, ActivityIndicator, Text} from 'react-native'
import {HeaderHome,CategoriItem} from '../../uikit'
import styles from './styles'
console.disableYellowBox = true;

class Home extends Component {

    state = {
        loader: false,
        dataEmpty: false,
        dialogVisible: false,
        passwordValid: false,
        password: ''
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
        this.setState({dialogVisible: false,password: '',passwordValid: false});
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

    changePassword = (text)=>{
        if(text === 'spa123123'){
            this.setState({password: text,passwordValid: true})
        }else{
            this.setState({password: text,passwordValid: false})
        }
    };

    render() {

        const {container,emptyDataContainer} = styles;
        const {data} = this.props;
        const {dialogVisible,loader,dataEmpty,password,passwordValid} = this.state;
        return (
            <ImageBackground style={container} source={require('../../../images/fon.jpg')}>

                <StatusBar hidden={true}/>

                <HeaderHome
                    basketPress={this.basketPress}
                    synchronizePress={()=>{

                        Alert.alert(
                            'Синхронизировать? ',
                            'Это может занять несколько минут. Не отключаете интернет.',
                            [
                                {text: 'ОТМЕНА', onPress: () => {return false}, style: 'cancel'},
                                {text: 'ОК', onPress: async () => {this.setState({dialogVisible: true})}},
                            ],
                            { cancelable: false }
                        )
                }}/>

                <Dialog.Container visible={dialogVisible}>
                    <Dialog.Title>Введите пароль.</Dialog.Title>
                    <Dialog.Input autoFocus={true} value={password} onChangeText={(text) => {this.changePassword(text)}}/>
                    <Dialog.Button label="ОТМЕНА" onPress={()=>{this.setState({dialogVisible: false,password: '',passwordValid: false})}}/>
                    {passwordValid?<Dialog.Button label="ОК" onPress={async ()=>{await this.synchronize()}}/>:null}
                </Dialog.Container>

                <FlatList
                    style={{marginTop: 80,width: '100%'}}
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
        ...store.data
    }
};

export default connect(mapStateToProps,{setDataStore})(Home)
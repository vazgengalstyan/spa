import React, {Component} from 'react'
import {setDataStore,getDataInStorage,synchronize} from '../../../actions'
import {connect} from 'react-redux'
import {View, StatusBar, FlatList,ImageBackground,Alert, ActivityIndicator, Text} from 'react-native'
import {HeaderHome,CategoriItem} from '../../uikit'
import styles from './styles'
console.disableYellowBox = true;

class Home extends Component {

    componentDidMount(){

        this.props.getDataInStorage();

    }

    categoryItemPress = (item)=>{

        this.props.navigation.navigate('List',{data: item})

    };

    render() {

        const {container,emptyDataContainer} = styles;
        const {data,selectedItems,homeLoader} = this.props;

        return (
            <ImageBackground style={container} source={require('../../../images/fon.jpg')}>

                <StatusBar hidden={true}/>

                <HeaderHome
                    data={selectedItems}
                    basketPress={()=>{this.props.navigation.navigate('Basket')}}
                    synchronizePress={()=>{

                        Alert.alert(
                            'Синхронизировать? ',
                            'Это может занять несколько минут. Не отключаете интернет.',
                            [
                                {text: 'ОТМЕНА', onPress: () => {return false}, style: 'cancel'},
                                {text: 'ОК', onPress: () => {this.props.synchronize()}},
                            ],
                            { cancelable: false }
                        )

                    }}/>

                <FlatList
                    style={{marginTop: 80,width: '100%'}}
                    data={data}
                    numColumns={2}
                    renderItem={({item})=>{
                        return <CategoriItem data={item} onPress={()=>{this.categoryItemPress(item)}}/>
                    }}
                    keyExtractor={(item, index) => index.toString()}
                />

                {homeLoader && <View style={emptyDataContainer}>

                    <ActivityIndicator size="large" color="rgb(0,0,0)" />

                </View>}

                {!this.props.data.length && !homeLoader?<View style={emptyDataContainer}>

                    <Text style={{fontSize: 24, color: 'rgb(0,0,0)'}}>Сделайте синхронизацию.</Text>

                </View>:null}

            </ImageBackground>
        );

    }
}

const mapStateToProps = store =>{
    return {
        ...store.data,
        ...store.selectedItems,
        ...store.homeLoader
    }
};

export default connect(mapStateToProps,{setDataStore,getDataInStorage,synchronize})(Home)
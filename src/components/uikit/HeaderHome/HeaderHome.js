import React from 'react'
import {View ,Text,Image,TouchableOpacity} from 'react-native'
import styles from './styles'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';

const HeaderHome = ({data,basketPress,synchronizePress})=>{

    const {container,basketContainer,IconBadge,BadgeText} = styles;

    return (

        <View style={container}>

            <Image source={require('../../../images/headerlogo.jpg')} resizeMode="contain" style={{height: '100%', width: '30%'}}/>

            <TouchableOpacity style={basketContainer} onPress={basketPress}>

                <MaterialIcons name="shopping-cart" size={35} color="rgb(128,128,128)" />

                <View style={IconBadge}>

                    <Text style={BadgeText}>{data.length}</Text>

                </View>

            </TouchableOpacity>

            <TouchableOpacity style={[basketContainer,{left:30}]} onPress={synchronizePress}>

                <MaterialIcons name="cached" size={35} color="rgb(128,128,128)" />

            </TouchableOpacity>

        </View >
    )

};

export {HeaderHome}
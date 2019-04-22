import React from 'react'
import {View ,Text,Image,TouchableOpacity,ImageBackground} from 'react-native'
import styles from './styles'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';

const HeaderHome = ({data,basketPress,synchronizePress})=>{

    const {container,basketContainer,IconBadge,BadgeText} = styles;

    return (

        <ImageBackground style={container} source={require('../../../images/header_bg.png')}>

            <Image source={require('../../../images/logo.png')} resizeMode="contain" style={{height: '85%', width: '30%'}}/>

            <TouchableOpacity style={basketContainer} onPress={basketPress}>

                <MaterialIcons name="shopping-cart" size={35} color="#4c3d0c" />

                <View style={IconBadge}>

                    <Text style={BadgeText}>{data.length}</Text>

                </View>

            </TouchableOpacity>

            <TouchableOpacity style={[basketContainer,{left:30}]} onPress={synchronizePress}>

                <MaterialIcons name="cached" size={35} color="#4c3d0c" />

            </TouchableOpacity>

        </ImageBackground >
    )

};

export {HeaderHome}
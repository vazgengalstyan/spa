import React from 'react'
import {View, ImageBackground, TouchableOpacity, Text} from 'react-native'
import styles from './styles'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';

const ListHeader = ({data,goBackPress,selectedItems,basketPress})=>{

    const {container,itemText,backgroundImageStyle,goBackIconContainer,imageBackground,basketContainer,IconBadge,BadgeText} = styles;

    return (

        <View style={container}>

            <ImageBackground
                source={{uri: data.img}}
                style={backgroundImageStyle}
                resizeMode={'cover'}
            >

                <TouchableOpacity style={basketContainer} onPress={basketPress}>

                    <MaterialIcons name="shopping-cart" size={35} color="rgb(128,128,128)" />

                    <View style={IconBadge}>

                        <Text style={BadgeText}>{selectedItems.length}</Text>

                    </View>

                </TouchableOpacity>

                <View style={imageBackground}>

                    <Text style={itemText}>{data.name}</Text>

                </View>

                <TouchableOpacity onPress={goBackPress} style={goBackIconContainer}>

                    <MaterialIcons name="arrow-back" size={35} color="rgb(0,0,0)" />

                </TouchableOpacity>

            </ImageBackground>

        </View >
    )

};

export {ListHeader}
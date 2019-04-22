import React from 'react'
import {View, ImageBackground, TouchableOpacity, Text, Image} from 'react-native'
import styles from './styles'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';

const ListHeader = ({data,goBackPress,selectedItems,basketPress})=>{

    const {container,headerLine,itemText,backgroundImageStyle,goBackIconContainer,imageBackground,basketContainer,IconBadge,BadgeText} = styles;

    return (
        <View style={{position: 'absolute', zIndex: 100, width: '100%'}}>

            <View style={container}>

                <Image source={require('../../../images/line.png')} resizeMode="cover" style={headerLine}/>

                <ImageBackground
                    source={{uri: data.img}}
                    style={backgroundImageStyle}
                    resizeMode={'cover'}
                >

                    <TouchableOpacity style={basketContainer} onPress={basketPress}>

                        <MaterialIcons name="shopping-cart" size={35} color="#4c3d0c" />

                        <View style={IconBadge}>

                            <Text style={BadgeText}>{selectedItems.length}</Text>

                        </View>

                    </TouchableOpacity>

                    <View style={imageBackground}>

                        <Text style={itemText}>{data.name}</Text>

                    </View>

                    <TouchableOpacity onPress={goBackPress} style={goBackIconContainer}>

                        <MaterialIcons name="arrow-back" size={35} color="#4c3d0c" />

                    </TouchableOpacity>

                </ImageBackground>

            </View>

        </View>
    )

};

export {ListHeader}
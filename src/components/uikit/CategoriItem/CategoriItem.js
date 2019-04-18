import React from 'react'
import {View ,Text,ImageBackground,TouchableOpacity} from 'react-native'
import styles from './styles'

const CategoriItem = ({data,onPress})=>{

    const {container,backgroundImageStyle,itemText,imageBackground} = styles;

    return (

        <TouchableOpacity style={container} onPress={onPress}>

            <View style={{elevation: 5, backgroundColor: 'rgb(0,0,0)'}}>

                <ImageBackground source={{uri: data.img}}
                                 style={backgroundImageStyle}
                                 resizeMode={'cover'}
                >
                    <View style={imageBackground}>

                        <Text style={itemText}>{data.name}</Text>

                    </View>

                </ImageBackground>

            </View>

        </TouchableOpacity >
    )

};

export {CategoriItem}
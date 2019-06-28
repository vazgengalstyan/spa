import React from 'react'
import {View ,Text,TouchableOpacity} from 'react-native'
import styles from './styles'

const Item = ({data,onPress,selected})=>{

    const {container,itemText,buttonStyle,buttonText} = styles;

    return (

        <View style={container}>

            <View style={{width: '50%'}}>
                <Text style={itemText}>{data.name}</Text>
            </View>
            <View>
                <Text style={itemText}>{data.price}руб.</Text>
            </View>
            <TouchableOpacity
                style={[buttonStyle,selected?{backgroundColor: 'rgb(0,0,0)'}:null]}
                onPress={()=>{onPress(data,selected)}}
            >
                <Text style={[buttonText,selected?{color: '#d3be7a'}:null]}>{selected?'Отмена':'Выбрать'}</Text>
            </TouchableOpacity>

        </View >
    )

};

export {Item}
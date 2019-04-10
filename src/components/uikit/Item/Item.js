import React from 'react'
import {View ,Text,Image,TouchableOpacity} from 'react-native'
import styles from './styles'

const Item = ({data,onPress,selectedItems})=>{

    const {container,itemText,buttonStyle,buttonText} = styles;

    let selected = selectedItems.find(obj => {
        return obj.id === data.id
    });

    return (

        <View style={container}>

            <Text style={itemText}>{data.name}</Text>

            <Text style={itemText}>{data.price}руб.</Text>

            <TouchableOpacity
                style={[buttonStyle,selected?{backgroundColor: 'rgb(75,181,67)'}:null]}
                onPress={()=>{onPress(data,selected)}}
            >

                <Text style={buttonText}>{selected?'Отмена':'Выбрать'}</Text>

            </TouchableOpacity>

        </View >
    )

};

export {Item}
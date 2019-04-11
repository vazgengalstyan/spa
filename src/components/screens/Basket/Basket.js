import React, {Component} from 'react'
import {connect} from 'react-redux'
import {unCheckItem,clearDataSelect} from "../../../actions";
import {View,Image, TouchableOpacity,Alert,Text,ScrollView} from 'react-native'
import styles from './styles'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'

class Basket extends Component {

    clearDataSelect = ()=>{

        let totalPrice = 0;

        this.props.selectedItems.map((item)=>{

            totalPrice = totalPrice + (+item.price)

        });

        Alert.alert(
            'Сумма',
            ` ${totalPrice} руб.`,
            [
                {text: 'ОТМЕНА', onPress: () => {return false}, style: 'cancel'},
                {text: 'ОК', onPress: () => {this.props.clearDataSelect();}},
            ],
            { cancelable: false }
        )
    };

    render() {

        const {
            container,
            header,
            goBackIconContainer,
            content,
            title,
            descriptionText,
            footer,
            topBorder,
            listContainer,
            buttonOk,
            itemStyle,
            itemTextContainer,
            itemText,
            itemButtonContainer
        } = styles;

        const {selectedItems} = this.props;

        let totalPrice = 0;

        selectedItems.map((item)=>{

            totalPrice = totalPrice + (+item.price)

        });

        return (
            <View style={container}>

                <View style={header}>

                    <Image source={require('../../../images/headerlogo.jpg')} resizeMode="contain" style={{height: '100%', width: '30%'}}/>

                    <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}} style={goBackIconContainer}>

                        <MaterialIcons name="arrow-back" size={35} color="rgb(0,0,0)" />

                    </TouchableOpacity>

                </View>

                <View style={content}>

                    <Text style={title}>Карзина</Text>
                    <Text style={descriptionText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit,vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodolectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique,tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec</Text>

                    <View style={{flex: 1, width: '100%',justifyContent: 'space-between'}}>

                        <ScrollView style={listContainer}>

                            {
                                selectedItems.map((item,index)=>
                                    <View key={index.toString()} style={itemStyle}>

                                        <View style={itemTextContainer}>

                                            <Text style={itemText}>{item.name}</Text>
                                            <Text style={itemText}>{item.price} руб.</Text>

                                        </View>

                                        <View style={itemButtonContainer}>

                                            <TouchableOpacity onPress={()=>{this.props.unCheckItem(item)}}>

                                                <MaterialIcons name="close" size={35} color="rgb(254,0,0)" />

                                            </TouchableOpacity>

                                        </View>

                                    </View>
                                )
                            }

                        </ScrollView>

                        <View style={footer}>

                            <TouchableOpacity style={buttonOk} onPress={this.clearDataSelect}>

                                <Text style={{fontSize: 18, color: 'rgb(0,0,0)'}}>Ok</Text>

                            </TouchableOpacity>

                            <Text style={[title,topBorder]}>Общая сумма {totalPrice} руб.</Text>

                        </View>

                    </View>

                </View>

            </View>
        );

    }
}

const mapStateToProps = store =>{
    return {
        selectedItems:  store.data.selectedItems
    }
};

export default connect(mapStateToProps,{unCheckItem,clearDataSelect})(Basket)
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {unCheckItem,clearDataSelect,setDiscount} from "../../../actions";
import {View, Image, TouchableOpacity, Alert, Text, ScrollView, ImageBackground} from 'react-native'
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
                {text: 'ОК', onPress: () => {this.props.clearDataSelect(); this.props.setDiscount(0)}},
            ],
            { cancelable: false }
        )
    };

    setDiscount = (val)=>{
        const {discount} = this.props;
        if(discount===val){
            this.props.setDiscount(0)
        }else {
            this.props.setDiscount(val)
        }
    };

    render() {

        const {
            container,
            header,
            goBackIconContainer,
            content,
            title,
            footer,
            topBorder,
            listContainer,
            buttonOk,
            itemStyle,
            itemTextContainer,
            itemText,
            itemButtonContainer,
            discountContainer
        } = styles;

        const {selectedItems,discount} = this.props;

        let totalPrice = 0;

        selectedItems.map((item)=>{

            totalPrice = totalPrice + (+item.price)

        });

        if(discount){
            let discountPrice = totalPrice/100*discount;
            totalPrice = totalPrice-discountPrice;
        }

        return (
            <ImageBackground style={container} source={require('../../../images/fon.jpg')}>

                <ImageBackground style={header} source={require('../../../images/header_bg.png')}>

                    <Image source={require('../../../images/logo.png')} resizeMode="contain" style={{height: '85%', width: '30%'}}/>

                    <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}} style={goBackIconContainer}>

                        <MaterialIcons name="arrow-back" size={35} color="#4c3d0c" />

                    </TouchableOpacity>

                </ImageBackground >

                <View style={content}>

                    <Text style={title}>Карзина</Text>

                    <View style={{flex: 1, width: '100%', justifyContent: 'space-between'}}>

                        <ScrollView style={listContainer}>

                            {
                                selectedItems.map((item, index) =>
                                    <View key={index.toString()} style={itemStyle}>

                                        <View style={itemTextContainer}>
                                            <Text style={itemText}>{item.name}</Text>
                                        </View>
                                        <View style={{width: '20%'}}>
                                            <Text style={itemText}>{item.price} руб.</Text>
                                        </View>
                                        <View style={itemButtonContainer}>
                                            <TouchableOpacity onPress={() => {
                                                this.props.unCheckItem(item)
                                            }}>
                                                <MaterialIcons name="close" size={35} color="rgb(254,0,0)"/>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                )
                            }

                        </ScrollView>

                        <View style={discountContainer}>
                            <Text style={title}>Скидка</Text>
                            <View style={{flexDirection: 'row',justifyContent: 'space-between',width: '100%',paddingHorizontal: 50}}>
                                <TouchableOpacity style={[buttonOk,discount===10?{backgroundColor: 'rgb(0,0,0)'}:{}]} onPress={()=>{this.setDiscount(10)}}>
                                    <Text style={[{ fontSize: 22, color: '#4c3d0c'},discount===10?{color: '#d3be7a'}:{}]}>-10%</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[buttonOk,discount===15?{backgroundColor: 'rgb(0,0,0)'}:{}]} onPress={()=>{this.setDiscount(15)}}>
                                    <Text style={[{ fontSize: 22, color: '#4c3d0c'},discount===15?{color: '#d3be7a'}:{}]}>-15%</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[buttonOk,discount===20?{backgroundColor: 'rgb(0,0,0)'}:{}]} onPress={()=>{this.setDiscount(20)}}>
                                    <Text style={[{ fontSize: 22, color: '#4c3d0c'},discount===20?{color: '#d3be7a'}:{}]}>-20%</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={footer}>
                            <TouchableOpacity style={buttonOk} onPress={this.clearDataSelect}>
                                <Text style={{ fontSize: 22, color: '#4c3d0c'}}>Ok</Text>
                            </TouchableOpacity>
                            <Text style={[title, topBorder]}>Общая сумма {totalPrice} руб.</Text>
                        </View>

                    </View>

                </View>

            </ImageBackground>
        );

    }
}

const mapStateToProps = store =>{
    return {
        selectedItems:  store.data.selectedItems,
        discount: store.data.discount
    }
};

export default connect(mapStateToProps,{unCheckItem,clearDataSelect,setDiscount})(Basket)
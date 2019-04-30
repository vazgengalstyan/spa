import React, {Component} from 'react'
import {connect} from 'react-redux'
import {View, Image, Text, ScrollView, ImageBackground} from 'react-native'
import styles from './styles'
import {ListHeader,Item} from "../../uikit";
import {checkItem,unCheckItem} from "../../../actions";

class ItemList extends Component {

    checkItem = (item,selected)=>{

        if(selected){
            this.props.unCheckItem(item)
        }else {
            this.props.checkItem(item)
        }

    };

    basketPress = ()=>{
        this.props.navigation.navigate('Basket')
    };

    render() {

        const {
            container,
            contentContainer,
            imageContainer,
            imgShadowContainer,
            listContainer,
            ItemDescriptionContainer,
            descriptionTitle,
            descriptionText,
            listContentContainer
        } = styles;
        const {data} = this.props.navigation.state.params;
        const {selectedItems} = this.props;

        return (

            <ImageBackground style={container} source={require('../../../images/fon.jpg')}>

                <ListHeader data={data} goBackPress={()=>{this.props.navigation.goBack()}} basketPress={this.basketPress}/>

                <View style={contentContainer}>

                    <View style={imageContainer}>

                        <View style={imgShadowContainer}>

                            <Image source={require('../../../images/listLogo.jpg')} resizeMode="contain" style={{height: '100%', width: '100%'}}/>

                        </View>

                    </View>

                    <View style={listContainer}>

                        <View style={listContentContainer}>

                            <ScrollView style={{marginTop: 50}}>

                                {
                                    data.list.map((item,index)=><Item
                                        data={item}
                                        onPress={this.checkItem}
                                        selectedItems={selectedItems}
                                        selected={selectedItems.map(function(e) { return e.id; }).indexOf(item.id)>-1}
                                        key={index.toString()}
                                    />)
                                }

                            </ScrollView>

                        </View>

                        <View style={ItemDescriptionContainer}>

                            <Text style={descriptionTitle}>описание услуги</Text>
                            <Text style={descriptionText}>{data.description}</Text>

                        </View>

                    </View>

                </View>

            </ImageBackground>

        );

    }
}

const mapStateToProps = store =>{
    return {
        selectedItems:  store.data.selectedItems
    }
};

export default connect(mapStateToProps,{checkItem,unCheckItem})(ItemList)
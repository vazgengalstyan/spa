import React, {Component} from 'react'
import {connect} from 'react-redux'
import {View, Image, Text, ScrollView} from 'react-native'
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

            <View style={container}>

                <ListHeader data={data} goBackPress={()=>{this.props.navigation.goBack()}} selectedItems={selectedItems} basketPress={this.basketPress}/>

                <View style={contentContainer}>

                    <View style={imageContainer}>

                        <View style={imgShadowContainer}>

                            <Image source={require('../../../images/listLogo.jpg')} resizeMode="contain" style={{height: '100%', width: '100%'}}/>

                        </View>

                    </View>

                    <View style={listContainer}>

                        <View style={listContentContainer}>

                            <ScrollView>

                                {
                                    data.list.map((item,index)=><Item
                                        data={item}
                                        onPress={this.checkItem}
                                        selectedItems={selectedItems}
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

            </View>

        );

    }
}

const mapStateToProps = store =>{
    return {
        selectedItems:  store.data.selectedItems
    }
};

export default connect(mapStateToProps,{checkItem,unCheckItem})(ItemList)
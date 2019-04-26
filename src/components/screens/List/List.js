import React, {Component} from 'react'
import {connect} from 'react-redux'
import {FlatList, ImageBackground, View} from 'react-native'
import {CategoriItem, ListHeader} from '../../uikit'
import styles from './styles'

class List extends Component {

    categoryItemPress = (item)=>{

        if(item.categories){

            this.props.navigation.push('List',{data: item})

        }else {

            this.props.navigation.navigate('ItemList',{data: item})

        }

    };

    basketPress = ()=>{
        this.props.navigation.navigate('Basket')
    };

    render() {

        const {container} = styles;
        const {data} = this.props.navigation.state.params;
        const {selectedItems} = this.props;

        return (
            <ImageBackground style={container} source={require('../../../images/fon.jpg')}>

                <ListHeader data={data} goBackPress={()=>{this.props.navigation.goBack()}} selectedItems={selectedItems} basketPress={this.basketPress}/>

                <FlatList
                    style={{marginTop: 80,width: '100%'}}
                    data={data.categories}
                    numColumns={2}
                    renderItem={({item})=>{
                        return <CategoriItem data={item} onPress={()=>{this.categoryItemPress(item)}}/>
                    }

                    }
                    keyExtractor={(item, index) => index.toString()}
                />

            </ImageBackground>
        );

    }
}

const mapStateToProps = store =>{
    return {
        selectedItems:  store.data.selectedItems
    }
};

export default connect(mapStateToProps,null)(List)
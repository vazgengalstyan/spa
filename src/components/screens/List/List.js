import React, {Component} from 'react'
import {connect} from 'react-redux'
import {FlatList, View} from 'react-native'
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
            <View style={container}>

                <ListHeader data={data} goBackPress={()=>{this.props.navigation.goBack()}} selectedItems={selectedItems} basketPress={this.basketPress}/>

                <FlatList
                    data={data.categories}
                    numColumns={2}
                    renderItem={({item})=>{
                        return <CategoriItem data={item} onPress={()=>{this.categoryItemPress(item)}}/>
                    }

                    }
                    keyExtractor={(item, index) => index.toString()}
                />

            </View>
        );

    }
}

const mapStateToProps = store =>{
    return {
        selectedItems:  store.data.selectedItems
    }
};

export default connect(mapStateToProps,null)(List)
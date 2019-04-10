import React, {Component} from 'react'
import {setDataStore} from '../../../actions'
import {connect} from 'react-redux'
import dataJson from '../../../../data/data.json'
import {View,StatusBar,FlatList} from 'react-native'
import {HeaderHome,CategoriItem} from '../../uikit'
import styles from './styles'

class Home extends Component {

    componentWillMount(){

        this.props.setDataStore(dataJson);

    }

    categoryItemPress = (item)=>{

        this.props.navigation.navigate('List',{data: item})

    };

    basketPress = ()=>{

        this.props.navigation.navigate('Basket')

    };

    render() {

        const {container} = styles;
        const {data,selectedItems} = this.props;

        return (
            <View style={container}>

                <StatusBar hidden={true}/>

                <HeaderHome data={selectedItems} basketPress={this.basketPress}/>

                <FlatList
                    data={data}
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
        ...store.data,
        ...store.selectedItems
    }
};

export default connect(mapStateToProps,{setDataStore})(Home)
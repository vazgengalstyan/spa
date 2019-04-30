import React, {Component} from 'react'
import {View ,Text,Image,TouchableOpacity,ImageBackground} from 'react-native'
import styles from './styles'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'
import {connect} from 'react-redux'

class HeaderHome extends Component {

    render() {

        const {container, basketContainer, IconBadge, BadgeText} = styles;
        const {selectedItems,basketPress,synchronizePress} = this.props;

        return (

            <View style={{position: 'absolute', zIndex: 100, width: '100%'}}>

                <ImageBackground style={container} source={require('../../../images/header_bg.png')}>

                    <Image source={require('../../../images/logo.png')} resizeMode="contain"
                           style={{height: '85%', width: '30%'}}/>

                    <TouchableOpacity style={basketContainer} onPress={basketPress}>

                        <MaterialIcons name="shopping-cart" size={35} color="#4c3d0c"/>

                        <View style={IconBadge}>

                            <Text style={BadgeText}>{selectedItems.length}</Text>

                        </View>

                    </TouchableOpacity>

                    <TouchableOpacity style={[basketContainer, {left: 30}]} onPress={synchronizePress}>

                        <MaterialIcons name="cached" size={35} color="#4c3d0c"/>

                    </TouchableOpacity>

                </ImageBackground>

            </View>
        )

    };
}

const mapStateToProps = store =>{
    return {
        selectedItems:  store.data.selectedItems
    }
};

export default connect(mapStateToProps)(HeaderHome);

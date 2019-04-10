import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        width: '45%',
        height: 220,
        backgroundColor: 'rgb(255,255,255)',
        elevation: 5,
        margin: '2.5%'
    },
    backgroundImageStyle: {
        width: '100%',
        height: '100%',
    },
    itemText: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: 'rgb(245,252,255)',
        opacity: 1
    },
    imageBackground: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default styles
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        width: '45%',
        height: 220,
        backgroundColor: 'rgb(255,255,255)',
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
        color: 'rgb(193,167,94)',
        opacity: 1
    },
    imageBackground: {
        shadowColor: 'rgb(0,0,0)',
        shadowOffset: {
            width: 5,
            height: 2,
        },
        shadowOpacity: 0.8,
        shadowRadius: 3.84,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default styles
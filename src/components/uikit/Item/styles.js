import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        padding: 10,
        width: '100%',
        height: 50,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    itemText: {
        width: '30%',
        marginRight: 20,
        fontSize: 24,
        color: 'rgb(0,0,0)'
    },
    buttonStyle: {
        backgroundColor: '#c1a75e',
        width: '30%',
        height: '100%',
        borderRadius: 20,
        elevation: 5,
        shadowColor: "rgb(0,0,0)",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.8,
        shadowRadius: 3.84,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 24,
        color: '#4c3d0c'
    }
});

export default styles
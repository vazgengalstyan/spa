import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        padding: 10,
        width: '100%',
        marginVertical: 10,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    itemText: {
        marginRight: 20,
        fontSize: 20,
        color: 'rgb(0,0,0)'
    },
    buttonStyle: {
        backgroundColor: '#c1a75e',
        width: '20%',
        height: 28,
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
        fontSize: 20,
        color: '#4c3d0c'
    }
});

export default styles
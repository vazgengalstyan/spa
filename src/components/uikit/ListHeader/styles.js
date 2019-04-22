import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 80,
        backgroundColor: 'transparent',
        elevation: 5,
        shadowColor: "rgb(0,0,0)",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.8,
        shadowRadius: 3.84
    },
    backgroundImageStyle: {
        width: '100%',
        height: '100%'
    },
    goBackIconContainer: {
        width: 50,
        height: 50,
        backgroundColor: 'rgb(193,167,94)',
        position: 'absolute',
        zIndex: 10,
        left: 30,
        top: 10,
        borderRadius: 90,
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'rgb(193,167,94)',
        opacity: 1
    },
    imageBackground: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    basketContainer: {
        width: 50,
        height: 50,
        backgroundColor: 'rgb(193,167,94)',
        position: 'absolute',
        zIndex: 10,
        right: 30,
        top: 10,
        borderRadius: 90,
        justifyContent: 'center',
        alignItems: 'center'
    },
    IconBadge: {
        position:'absolute',
        top:1,
        right:1,
        width:15,
        height:15,
        borderRadius:15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF0000'
    },
    BadgeText: {
        fontSize: 10,
        color: 'rgb(255,255,255)',
        fontWeight: 'bold'
    },
    headerLine: {
        height: '15%',
        width: '100%',
        position: 'absolute',
        zIndex: 10,
        bottom: -6
    }
});

export default styles
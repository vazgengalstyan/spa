import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 80,
        backgroundColor: 'rgb(245,252,255)',
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
        width: 60,
        height: 60,
        backgroundColor: 'rgb(245,252,255)',
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
        color: 'rgb(245,252,255)',
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
        width: 60,
        height: 60,
        backgroundColor: 'rgb(245,252,255)',
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
        minWidth:20,
        height:20,
        borderRadius:15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF0000'
    },
    BadgeText: {
        fontSize: 10,
        color: 'rgb(255,255,255)',
        fontWeight: 'bold'
    }
});

export default styles
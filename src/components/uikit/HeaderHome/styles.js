import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        height: 85,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        shadowColor: "rgb(0,0,0)",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.8,
        shadowRadius: 3.84,
        elevation: 5
    },
    basketContainer: {
        width: 50,
        height: 50,
        backgroundColor: 'rgb(193,167,94)',
        position: 'absolute',
        zIndex: 10,
        right: 30,
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
    }
});

export default styles
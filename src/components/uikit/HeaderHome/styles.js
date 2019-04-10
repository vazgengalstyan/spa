import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(0,0,0)',
        elevation: 5
    },
    basketContainer: {
        width: 60,
        height: 60,
        backgroundColor: 'rgb(245,252,255)',
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
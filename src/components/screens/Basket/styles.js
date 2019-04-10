import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(245,252,255)'
    },
    header: {
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(0,0,0)',
        elevation: 5
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
    content: {
        flex: 1,
        padding: 50,
        alignItems: 'center'
    },
    title: {
        textAlign: 'center',
        color: 'rgb(0,0,0)',
        fontSize: 30
    },
    descriptionText: {
        color: 'rgb(0,0,0)',
        marginTop: 10,
        marginHorizontal: 20,
        fontSize: 24
    },
    footer: {
        flex: 0.2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 50
    },
    topBorder: {
        borderTopWidth: 2,
        borderColor: 'rgb(0,0,0)'
    },
    listContainer: {
        flex: 0.8,
        padding: 20
    },
    itemStyle: {
        padding: 10,
        flexDirection: 'row',
        marginVertical: 10
    },
    itemTextContainer: {
        flexDirection: 'row',
        width: '70%',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    itemText: {
        textAlign: 'center',
        color: 'rgb(0,0,0)',
        fontSize: 30
    },
    itemButtonContainer: {
        width: '30%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonOk: {
        width: '20%',
        height: '90%',
        backgroundColor: 'rgb(75,181,67)',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3
    }
});

export default styles
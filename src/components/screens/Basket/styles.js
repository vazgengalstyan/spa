import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(245,252,255)'
    },
    header: {
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
        flex: 0.6,
        padding: 20
    },
    discountContainer: {
        flex: 0.2,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 30
    },
    itemStyle: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10
    },
    itemTextContainer: {
        width: '60%',
        paddingHorizontal: 10
    },
    itemText: {
        color: 'rgb(0,0,0)',
        fontSize: 20
    },
    itemButtonContainer: {
        width: '20%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonOk: {
        width: '20%',
        height: 40,
        backgroundColor: '#c1a75e',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
        shadowColor: "rgb(0,0,0)",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.8,
        shadowRadius: 3.84,
    }
});

export default styles
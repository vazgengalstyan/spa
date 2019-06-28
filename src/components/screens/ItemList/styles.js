import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(245,252,255)',
    },
    contentContainer: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 10
    },
    imageContainer: {
        width: '15%',
        height: '100%',
        paddingVertical: 80
    },
    imgShadowContainer: {
        marginTop: 10,
        backgroundColor: 'rgb(0,0,0)',
        elevation: 5,
        shadowColor: "rgb(0,0,0)",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.8,
        shadowRadius: 3.84,
    },
    listContainer: {
        width: '85%',
        height: '100%',
        justifyContent: 'space-between'
    },
    ItemDescriptionContainer: {
        flex: 0.3
    },
    descriptionTitle: {
        textAlign: 'center',
        color: 'rgb(0,0,0)',
        fontSize: 20
    },
    descriptionText: {
        color: 'rgb(0,0,0)',
        marginTop: 10,
        marginHorizontal: 20,
        fontSize: 18
    },
    listContentContainer: {
        flex: 0.7,
        padding: 20
    }
});

export default styles
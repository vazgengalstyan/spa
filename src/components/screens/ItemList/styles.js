import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(245,252,255)',
    },
    contentContainer: {
        flex: 1,
        backgroundColor: 'rgb(245,252,255)',
        flexDirection: 'row'
    },
    imageContainer: {
        width: '30%',
        height: '100%',
        paddingVertical: 80
    },
    imgShadowContainer: {
        backgroundColor: 'rgb(255,255,255)',
        elevation: 5
    },
    listContainer: {
        width: '70%',
        height: '100%',
        justifyContent: 'space-between'
    },
    ItemDescriptionContainer: {
        flex: 0.3
    },
    descriptionTitle: {
        textAlign: 'center',
        color: 'rgb(0,0,0)',
        fontSize: 30
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
import {StyleSheet} from 'react-native';

const backgroundColor = '#F7F7F7'
const primaryColor = '#5091ee'
const barIconTextColor = '#fff'
const itemDataColor = '#41BAE6'
const articleFontFamily = 'sans-serif' //android
const articleTextColor = '#737373'

export default StyleSheet.create({
    container: {
        height: '100%'
    },
    header: {
        alignItems: 'flex-end',
        paddingBottom: '2%',
    },

    bar: {
        backgroundColor: primaryColor,
        height: '10%',
        display: 'flex',
        paddingHorizontal: '1%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    barIconsLeft: {},
    barIconsRight: {
        display: 'flex',
        flexDirection: 'row',
    },
    barIcon: {
        textAlign: 'center',
        paddingHorizontal: '3%',
    },
    barIconWithText: {},
    barIconText: {
        paddingTop: 4,
        textAlign: 'center',
        color: barIconTextColor
    },
    section: {
        backgroundColor: backgroundColor,
        height: '80%',
        paddingHorizontal: '3%',
        paddingTop: '3%'
    },
    sectionData: {
        backgroundColor: '#FFF',
        height: '20%',
        borderRadius: 30,
        marginBottom: '3%',
        //Shadow props for Android
        elevation: 5,
        shadowColor: '#52006A',
        //Shadow props for iOS (different example)
        /*
        shadowColor: '#52006A',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        */
    },
    sectionDataTitleWithIcon: { //special case for having one item centered and one at right
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'relative',
        alignItems: 'center',
        paddingHorizontal: '5%',
        paddingTop: '2%',
        paddingBottom: '3%'
    },
    sectionDataTitle: {
        position: 'absolute',
        color: '#000',
        fontWeight: 'bold',
        fontSize: 15,
    },
    sectionDataTitleIconRight: {
        marginLeft: 'auto',
    },
    sectionDataContent: {
        height: '80%',
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    sectionDataContentItem: {
        flexBasis: 0,
        flexGrow: 1,
        flexShrink: 1,
        alignItems: 'center',
    },
    contentItemData: {
        color: itemDataColor,
        fontSize: 20
    },
    contentItemDescription: {
        color: 'grey',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 12
    },
    itemDataDescription: {

    },
    sectionArticles: {
        height: '60%',
        padding: '3%',
    },
    sectionArticle: {
        height: 90, //maybe fix height by calculating your screen's pixels first (see pixel ratio)
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    articleImage: {
        width: '25%'
    },

    articleDescription: {
        width: '65%',
        paddingHorizontal: '5%',
    },
    articleTitle: {
        fontFamily: articleFontFamily,
        color: articleTextColor,
        fontWeight: '500',
        fontSize: 17
    },
    articleContent: {
        fontFamily: articleFontFamily,
        fontWeight: '300',
        color: articleTextColor,
        letterSpacing: 0.2
    },
    footer: {
        alignItems: 'center'
    },
    verticalDivider: {
        borderColor: '#000',
        borderWidth: 0.4,
        height: '70%'
    }
})
import { StyleSheet, Platform } from 'react-native';

const backgroundColor = '#F7F7F7';
const primaryColor = '#E8B3A2';
const barIconTextColor = '#fff';
const itemDataColor = '#000';
const articleFontFamily =
  Platform.OS === 'ios' ? 'Helvetica Neue' : 'sans-serif';
const articleTextColor = '#737373';

export default StyleSheet.create({
  container: {
  },
  header: {
    // is it needed?
    alignItems: 'flex-end',
    backgroundColor: 'primaryColor',
    paddingBottom: '2%',
  },
  bar: {
    backgroundColor: primaryColor,
    height: '8%',
    paddingHorizontal: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  barIconsLeft: {
    flexDirection: 'row',
  },
  barIconsRight: {
    flexDirection: 'row',
  },

  barIcon: {
    textAlign: 'center',
    paddingHorizontal: '1%',
  },

  barIconText: {
    paddingTop: 4,
    textAlign: 'center',
    color: barIconTextColor,
  },

  section: {
    backgroundColor: backgroundColor,
    paddingHorizontal: '3%',
    paddingTop: '3%',
  },

  sectionData: {
    backgroundColor: '#FFF',
    flex: 1,
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

  sectionDataTitleWithIcon: {
    //special case for having one item centered and one at right
    flexDirection: 'row',
    paddingHorizontal: '5%',
    paddingTop: '2%',
    paddingBottom: '3%',
  },

  sectionDataTitle: {
    alignSelf: 'flex-start',
    color: '#000',
    fontWeight: 'bold',
    fontSize: 15,
  },

  sectionDataTitleIconRight: {
    // marginLeft: '1%',
    alignSelf: 'flex-end',
  },
  // sectionDataContentAndCalendar: {
  //   flex: 1,
  // alignItems: 'flex-start',
  // },
  sectionDataQuickFacts: {
    flex: 1,

    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  // sectionDataCallendar: {
  //   alignSelf: 'center',
  //   paddingTop: '3%',
  //   // justifyContent: 'space-around',
  //   flex: 1,
  //   // flexBasis: 0,
  //   flexGrow: 1,
  //   // flexShrink: 1,
  // },
  calendarTitle: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 15,
  },
  sectionDataContentItem: {
    flexBasis: 0,
    flexGrow: 1,
    flexShrink: 1,
    alignItems: 'center',
  },
  contentItemData: {
    color: itemDataColor,
    fontSize: 20,
  },
  contentItemDescription: {
    color: 'grey',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 12,
  },
  itemDataDescription: {},

  sectionArticles: {
    height: '80%',
    display: 'flex',
    padding: '3%',
  },

  sectionArticle: {
    marginTop: '2%',
    marginBottom: '2%',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  articleImage: {
    width: '25%',
  },

  articleDescription: {
    width: '65%',
    paddingHorizontal: '5%',
  },
  articleTitle: {
    fontFamily: articleFontFamily,
    color: articleTextColor,
    fontWeight: '500',
    fontSize: 17,
  },
  articleContent: {
    fontFamily: articleFontFamily,
    fontWeight: '300',
    color: articleTextColor,
    letterSpacing: 0.2,
  },
  footer: {
    alignItems: 'center',
  },
  verticalDivider: {
    borderColor: '#000',
    borderWidth: 0.4,
    height: '70%',
  },
});

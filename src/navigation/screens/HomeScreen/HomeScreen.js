import React, {useEffect, useState} from 'react';
import {Text, View, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import {auth, db, handleLogin, handleSignOut} from '../../../../firebase';
import HomeScreenStyles from "../../../styles/HomeScreenStyles";
import Icon from '../../../styles/icons';
import SectionDataContentItem from "./SectionDataContentItem";
import SectionArticle from "./SectionArticle";
import {useDispatch, useSelector} from "react-redux";
import {selectArticles, getArticles, addHomeScreenArticles, uploadArticle} from "../../../redux/slices/articlesSlice";


//theme
//bar
const barIconSize = 25
const barIconColor = '#fff'
//section data
const sectionDataTitleIconColor = '#838383'
const sectionDataTitleIconSize = 15

//strings for converting(e.g to be translated)
const homeIconText = 'Home'
const statsIconText = 'Stats'
const newIconText = 'New'
const patientsIconText = 'Patients'
const profileIconText = 'Profile'

//other comments
    //article must have a limit of characters for title and description
    //validate article params

const HomeScreen = () => {
    const dispatch = useDispatch()
    //section vars
    const createArticle = () => {
        let article = {
            id: 10,
            content: 'uploaded article content',
            imageUrl: 'https://l.facebook.com/l.php?u=https%3A%2F%2Fhips.hearstapps.com%2Fhmg-prod.s3.amazonaws.com%2Fimages%2Fskincare-1588698347.png%3Fcrop%3D1.00xw%253A0.752xh%253B0%252C0.175xh%26resize%3D1200%26fbclid%3DIwAR0Xvg47IfzOyCsTZXNn6YERifI2CgzcSu-2xtn0FAP0ZK2YJalcWh3W0yI&h=AT0LvEsMhwhq5ZPb_IJ-7EfuDMwQ2AUDVfU7pEFgd_ItUXU-irXjcVklKwJpfUv7ZcLu10ozoPzg7N8pytCpzhjHh-JM7pUv75hr7oK5WbeVdPUF-nAjT5TgWt9-FZ36HdVGgg',
            title: 'uploaded article title'
        }
        console.log('article to create', article)
        uploadArticle(article)
    }

    const showCollectionResponse = () => {
        handleLogin('giwrgos@giwrgos.com', '12345678').then((userCredentials) => {
            getArticles().then(snapshot => {
                let articles = []
                snapshot.forEach(doc => {
                    console.log(doc.data())
                    articles.push(doc.data())
                })
                console.log('articles', articles)
                dispatch(addHomeScreenArticles({articles}))
            }).catch((error) => {
                console.log('Error getting articles:\n', error);
            });
        }).catch((error) => alert(error.message));
    }
    const articlesList = useSelector(selectArticles)
    const [data, setData] = useState([]);
    const [perms, setPerms] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (auth.currentUser) {
            const docRef = db.collection('users').doc(auth.currentUser.uid);
            docRef.get().then((results) => {
                const data = results.data();
                setData(data);

                const docRefforPerms = db
                    .collection('roles')
                    .where('roleId', '==', data.roleId);
                docRefforPerms.get().then((queryResult) => {
                    queryResult.forEach((doc) => {
                        const roleData = doc.data();
                        setPerms(roleData.perms[0].actions);
                    });
                });
                setLoading(false);
            });
        } else {
        }
    }, []);

    return (
        <View style={HomeScreenStyles.container}>
            <View style={[HomeScreenStyles.header, HomeScreenStyles.bar]}>
                <View style={HomeScreenStyles.barIconsLeft}>
                    <Icon.FontAwesome
                        name='pencil'
                        color={barIconColor}
                        style={HomeScreenStyles.barIcon}
                        size={barIconSize}
                    >
                    </Icon.FontAwesome>
                </View>
                <View style={HomeScreenStyles.barIconsRight}>
                    <Icon.FontAwesome
                        name='bell'
                        color={barIconColor}
                        style={HomeScreenStyles.barIcon}
                        size={barIconSize}
                    >
                    </Icon.FontAwesome>
                    <Icon.Feather
                        name='message-square'
                        color={barIconColor}
                        style={HomeScreenStyles.barIcon}
                        size={barIconSize}
                    >
                    </Icon.Feather>
                </View>
            </View>
            <View style={HomeScreenStyles.section}>
                <View style={HomeScreenStyles.sectionData}>

                </View>
                <View style={HomeScreenStyles.sectionData}>
                    <View style={HomeScreenStyles.sectionDataTitleWithIcon}>
                        <Text style={HomeScreenStyles.sectionDataTitle}>
                            Quick facts
                        </Text>
                        <Icon.Ionicons
                            name='settings-sharp'
                            color={sectionDataTitleIconColor}
                            style={HomeScreenStyles.sectionDataTitleIconRight}
                            size={sectionDataTitleIconSize}
                        >
                        </Icon.Ionicons>
                    </View>

                    <View style={HomeScreenStyles.sectionDataContent}>
                        <SectionDataContentItem itemDescription={'Active patients'} itemData={27} />
                        <SectionDataContentItem itemDescription={'Active therapies'} itemData={14} />
                        <SectionDataContentItem itemDescription={'°C'} itemData={18} />
                        <SectionDataContentItem itemDescription={'UV'} itemData={2} />
                        <SectionDataContentItem itemDescription={'Humidity'} itemData={24} />
                    </View>

                </View>

                <ScrollView style={HomeScreenStyles.sectionArticles}>
                    {
                        articlesList.map(article => (

                            <SectionArticle
                                key={article.id.toString()}
                                id={article.id}
                                imageUrl={article.imageUrl}
                                title={article.title}
                                content={article.content}
                            >
                            </SectionArticle>
                        ))
                    }
                </ScrollView>

            </View>
            <View style={[HomeScreenStyles.footer, HomeScreenStyles.bar]}>
                <View
                    style={HomeScreenStyles.barIconWithText}
                >
                    <Icon.Feather
                        style={HomeScreenStyles.barIcon}
                        name='home'
                        color={barIconColor}
                        size={barIconSize}
                    >
                    </Icon.Feather>
                    <Text style={HomeScreenStyles.barIconText}>{homeIconText}</Text>
                </View>
                <View
                    style={HomeScreenStyles.barIconWithText}
                >
                    <TouchableOpacity
                        onPress={showCollectionResponse}
                    >
                        <Icon.Ionicons
                            name='stats-chart'
                            color={barIconColor}
                            style={HomeScreenStyles.barIcon}
                            size={barIconSize}
                        >
                        </Icon.Ionicons>
                        <Text style={HomeScreenStyles.barIconText}>{statsIconText}</Text>
                    </TouchableOpacity>

                </View>
                <View
                    style={HomeScreenStyles.barIconWithText}
                >
                    <TouchableOpacity
                        onPress={createArticle}
                    >
                        <Icon.Feather
                            name='plus-circle'
                            color={barIconColor}
                            style={HomeScreenStyles.barIcon}
                            size={barIconSize}
                        >
                        </Icon.Feather>
                        <Text style={HomeScreenStyles.barIconText}>{newIconText}</Text>
                    </TouchableOpacity>

                </View>

                <View
                    style={HomeScreenStyles.barIconWithText}
                >
                    <Icon.Feather
                        name='list'
                        color={barIconColor}
                        style={HomeScreenStyles.barIcon}
                        size={barIconSize}
                    >
                    </Icon.Feather>
                    <Text style={HomeScreenStyles.barIconText}>{patientsIconText}</Text>
                </View>

                <View
                    style={HomeScreenStyles.barIconWithText}
                >
                    <Icon.Ionicons
                        name='person'
                        color={barIconColor}
                        style={HomeScreenStyles.barIcon}
                        size={barIconSize}
                    >
                    </Icon.Ionicons>
                    <Text style={HomeScreenStyles.barIconText}>{profileIconText}</Text>
                </View>

            </View>
        </View>
    );
};

export default HomeScreen;

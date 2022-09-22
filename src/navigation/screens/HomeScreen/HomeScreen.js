import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  ScrollView,
  FlatList,
  Modal,
  TouchableOpacity,
} from 'react-native';
import {
  auth,
  db,
  signIn,
  handleSignOut,
  collection,
  getDoc,
  query,
  where,
  getDocs,
} from '../../../firebase/config';
import HomeScreenStyles from '../../../styles/HomeScreenStyles';
import Icon from '../../../styles/icons';
import AddArticleFormComponent from './AddArticleFormComponent';
import SectionDataContentItem from './SectionDataContentItem';
import SectionArticle from './SectionArticle';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectArticles,
  getArticles,
  addHomeScreenArticles,
  doaddArticleLocalyAndToServer,
} from '../../../redux/slices/articlesSlice';

//theme
//bar
const barIconSize = 25;
const barIconColor = '#fff';
//section data
const sectionDataTitleIconColor = '#838383';
const sectionDataTitleIconSize = 15;

//strings for converting(e.g to be translated)
const homeIconText = 'Home';
const statsIconText = 'Stats';
const newIconText = 'New';
const patientsIconText = 'Patients';
const profileIconText = 'Profile';

//other comments
//article must have a limit of characters for title and description
//validate article params

const HomeScreen = () => {
  const dispatch = useDispatch();
  //section vars
  const showCollectionResponse = () => {
    getArticles()
      .then((snapshot) => {
        let articles = [];
        snapshot.forEach((doc) => {
          // console.log(doc.data());

          let article = doc.data();
          article.id = doc.id;
          articles.push(article);
        });
        console.log('articles', articles);
        dispatch(addHomeScreenArticles({ articles }));
      })
      .catch((error) => {
        console.log('Error getting articles:\n', error);
      });
  };

  const articlesList = useSelector(selectArticles);

  const [data, setData] = useState([]);
  const [perms, setPerms] = useState([]);
  const [loading, setLoading] = useState(true);

  const [modalVisible, setModalVisible] = useState(false);

  const modaler = () => {
    setModalVisible(!modalVisible);
  };

  // const addArticleToParent = (title, content, image, isFavorite) => {
  //   addArticleLocalyAndToServer(title, content, image, isFavorite);
  // };

  const addArticleLocalyAndToServer = (title, content, image, isFavorite) => {
    console.log(
      'addArticleLocalyAndToServer',
      title,
      content,
      image,
      isFavorite
    );
    // dispatch(
    //   doaddArticleLocalyAndToServer({ title, content, image, isFavorite })
    // );
    dispatch(
      doaddArticleLocalyAndToServer({ title, content, image, isFavorite })
    );
    showCollectionResponse();
  };

  return (
    <View style={HomeScreenStyles.container}>
      <Modal animationType='slide' transparent={true} visible={modalVisible}>
        <AddArticleFormComponent
          modaler={() => {
            setModalVisible(!modalVisible);
          }}
          addArticleToParent={(title, content, image, isFavorite) => {
            addArticleLocalyAndToServer(title, content, image, isFavorite),
              console.log('home out');
          }}
        />
      </Modal>
      <View style={[HomeScreenStyles.header, HomeScreenStyles.bar]}>
        <View style={HomeScreenStyles.barIconsLeft}>
          <Icon.FontAwesome
            name='pencil'
            color={barIconColor}
            style={HomeScreenStyles.barIcon}
            size={barIconSize}
          ></Icon.FontAwesome>
        </View>
        <View style={HomeScreenStyles.barIconsRight}>
          <Icon.FontAwesome
            name='bell'
            color={barIconColor}
            style={HomeScreenStyles.barIcon}
            size={barIconSize}
          ></Icon.FontAwesome>
          <Icon.Feather
            name='message-square'
            color={barIconColor}
            style={HomeScreenStyles.barIcon}
            size={barIconSize}
          ></Icon.Feather>
        </View>
      </View>
      <View style={HomeScreenStyles.section}>
        <View style={HomeScreenStyles.sectionData}></View>
        <View style={HomeScreenStyles.sectionData}>
          <View style={HomeScreenStyles.sectionDataTitleWithIcon}>
            <Text style={HomeScreenStyles.sectionDataTitle}>Quick facts</Text>
            <Icon.Ionicons
              name='settings-sharp'
              color={sectionDataTitleIconColor}
              style={HomeScreenStyles.sectionDataTitleIconRight}
              size={sectionDataTitleIconSize}
            ></Icon.Ionicons>
          </View>

          <View style={HomeScreenStyles.sectionDataContent}>
            <SectionDataContentItem
              itemDescription={'Active patients'}
              itemData={27}
            />
            <SectionDataContentItem
              itemDescription={'Active therapies'}
              itemData={14}
            />
            <SectionDataContentItem itemDescription={'°C'} itemData={18} />
            <SectionDataContentItem itemDescription={'UV'} itemData={2} />
            <SectionDataContentItem
              itemDescription={'Humidity'}
              itemData={24}
            />
          </View>
        </View>
        <ScrollView style={HomeScreenStyles.sectionArticles}>
          {articlesList.map((article) => (
            <SectionArticle
              key={article.id}
              id={article.id}
              imageUrl={article.imageUrl}
              title={article.title}
              isFavorite={article.isFavorite}
              content={article.content}
            ></SectionArticle>
          ))}
        </ScrollView>
      </View>
      <View style={[HomeScreenStyles.footer, HomeScreenStyles.bar]}>
        <View style={HomeScreenStyles.barIconWithText}>
          <Icon.Feather
            style={HomeScreenStyles.barIcon}
            name='home'
            color={barIconColor}
            size={barIconSize}
          ></Icon.Feather>
          <Text style={HomeScreenStyles.barIconText}>{homeIconText}</Text>
        </View>
        <View style={HomeScreenStyles.barIconWithText}>
          <TouchableOpacity onPress={showCollectionResponse}>
            <Icon.Ionicons
              name='stats-chart'
              color={barIconColor}
              style={HomeScreenStyles.barIcon}
              size={barIconSize}
            ></Icon.Ionicons>
            <Text style={HomeScreenStyles.barIconText}>{statsIconText}</Text>
          </TouchableOpacity>
        </View>
        <View style={HomeScreenStyles.barIconWithText}>
          <TouchableOpacity onPress={handleSignOut}>
            <Icon.Feather
              name='plus-circle'
              color={barIconColor}
              style={HomeScreenStyles.barIcon}
              size={barIconSize}
            ></Icon.Feather>
            <Text style={HomeScreenStyles.barIconText}>{newIconText}</Text>
          </TouchableOpacity>
        </View>

        <View style={HomeScreenStyles.barIconWithText}>
          <TouchableOpacity>
            <Icon.Feather
              name='list'
              color={barIconColor}
              style={HomeScreenStyles.barIcon}
              size={barIconSize}
            ></Icon.Feather>
            <Text style={HomeScreenStyles.barIconText}>{patientsIconText}</Text>
          </TouchableOpacity>
        </View>
        <View style={HomeScreenStyles.barIconWithText}>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <Icon.Ionicons
              name='person'
              color={barIconColor}
              style={HomeScreenStyles.barIcon}
              size={barIconSize}
            ></Icon.Ionicons>
            <Text style={HomeScreenStyles.barIconText}>{profileIconText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

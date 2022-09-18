import React, { useEffect, useState } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import HomeScreenStyles from '../../../styles/HomeScreenStyles';
import {
  removeArticle,
  makeArticleFavorite,
} from '../../../redux/slices/articlesSlice';
import { useDispatch } from 'react-redux';

const SectionArticle = (article) => {
  const dispatch = useDispatch();
  const deleteArticle = (id) => {
    console.log('deleting article id', id);
    dispatch(removeArticle({ id }));
  };
  const favoriteArticle = (id) => {
    console.log('favoriting article id', id);
    dispatch(makeArticleFavorite({ id }));
  };
  return (
    <TouchableOpacity
      onPress={() => {
        console.log('article', article.id);
        deleteArticle(article.id);
      }}
    >
      <View style={HomeScreenStyles.sectionArticle}>
        <Image
          style={HomeScreenStyles.articleImage}
          source={{ uri: article.imageUrl }}
        />
        <View style={HomeScreenStyles.articleDescription}>
          <TouchableOpacity
            onPress={() => {
              favoriteArticle(article.id);
            }}
          >
            <Text style={HomeScreenStyles.articleTitle}>
              {article.isFavorite ? '<3' : '-'}
            </Text>
          </TouchableOpacity>
          <Text style={HomeScreenStyles.articleTitle}>{article.title} </Text>
          <Text style={HomeScreenStyles.articleContent}>
            {article.content}{' '}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SectionArticle;

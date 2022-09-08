import React, {useEffect, useState} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import HomeScreenStyles from "../../../styles/HomeScreenStyles";
import {removeArticle} from "../../../redux/slices/articlesSlice";
import {useDispatch} from "react-redux";


const SectionArticle = (article) => {
    const dispatch = useDispatch()
    const deleteArticle = (id) => {
            console.log('deleting article id', id)
            dispatch(removeArticle({id}))
    }
    return (
        <TouchableOpacity onPress={() => {
            console.log('article', article.id)
            deleteArticle(article.id)
        }}>
            <View style={HomeScreenStyles.sectionArticle}>
                <Image
                    style={HomeScreenStyles.articleImage}
                    source={{uri: article.imageUrl}}
                />
                <View style={HomeScreenStyles.articleDescription}>
                    <Text style={HomeScreenStyles.articleTitle}>{article.title} </Text>
                    <Text style={HomeScreenStyles.articleContent}>{article.content} </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default SectionArticle